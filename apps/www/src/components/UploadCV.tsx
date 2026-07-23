import { useEffect, useState } from "react";

type UploadedFile = {
  internalName: string;
  name: string;
  size: number;
  uploadedAt: string;
};

export default function UploadCV() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<UploadedFile | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] ?? null;
    setFile(selectedFile);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      setMessage("Please select a CV file first.");
      return;
    }

    const formData = new FormData();
    formData.append("cv", file);

    const response = await fetch("http://localhost:4000/cv/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (response.ok) {
      setMessage(`Uploaded successfully: ${result.file.name}`);
      setFile(null);
      await fetchUploadedFiles();
    } else {
      setMessage(result.error ?? "Upload failed");
    }
  };

  const fetchUploadedFiles = async () => {
    const response = await fetch("http://localhost:4000/cv/list");
    const result = await response.json();
    if (response.ok) {
      setUploadedFiles(result.files);
      if (result.files.length > 0) {
        setSelectedFile((prev) => prev || result.files[0]);
      }
    }
  };

  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: 24, fontFamily: "Inter, sans-serif" }}>
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 28, marginBottom: 8 }}>CareerPilot</h2>
        <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
          Sube tu CV y gestiona los documentos cargados desde una vista simple y clara.
        </p>
      </section>

      <section style={{ display: "grid", gap: 24, gridTemplateColumns: "1.5fr 1fr" }}>
        <div style={{ padding: 24, border: "1px solid #e5e7eb", borderRadius: 16, background: "#ffffff", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)" }}>
          <h3 style={{ marginBottom: 16 }}>Upload your CV</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label htmlFor="cv-upload" style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                Seleccionar CV
              </label>
              <input id="cv-upload" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} style={{ width: "100%" }} />
              {file && (
                <p style={{ marginTop: 8, color: "#111827" }}>
                  Selected: <strong>{file.name}</strong> ({Math.round(file.size / 1024)} KB)
                </p>
              )}
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: 10,
                border: "none",
                background: "#2563eb",
                color: "white",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Upload CV
            </button>
          </form>
          {message && (
            <div style={{ marginTop: 20, padding: 16, borderRadius: 12, background: "#f8fafc", color: "#111827" }}>
              {message}
            </div>
          )}
        </div>

        <div style={{ padding: 24, border: "1px solid #e5e7eb", borderRadius: 16, background: "#f9fafb" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h3 style={{ margin: 0 }}>Loaded CVs</h3>
            <button
              type="button"
              onClick={fetchUploadedFiles}
              style={{
                padding: "8px 14px",
                borderRadius: 10,
                border: "1px solid #d1d5db",
                background: "white",
                cursor: "pointer",
              }}
            >
              Refresh
            </button>
          </div>
          {uploadedFiles.length === 0 ? (
            <p style={{ color: "#6b7280", lineHeight: 1.7 }}>
              No hay CVs cargados todavía. Sube tu primer CV para verlo aquí.
            </p>
          ) : (
            <div style={{ display: "grid", gap: 12 }}>
              {uploadedFiles.map((uploaded) => (
                <button
                  key={uploaded.internalName}
                  type="button"
                  onClick={() => setSelectedFile(uploaded)}
                  style={{
                    textAlign: "left",
                    padding: 14,
                    borderRadius: 12,
                    border: uploaded.internalName === selectedFile?.internalName ? "2px solid #2563eb" : "1px solid #d1d5db",
                    background: uploaded.internalName === selectedFile?.internalName ? "#eff6ff" : "white",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <div>
                      <div style={{ fontWeight: 700 }}>{uploaded.name}</div>
                      <div style={{ color: "#6b7280", fontSize: 14 }}>
                        {Math.round(uploaded.size / 1024)} KB
                      </div>
                    </div>
                    <div style={{ color: "#6b7280", fontSize: 14 }}>
                      {new Date(uploaded.uploadedAt).toLocaleString()}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedFile && (
        <section style={{ marginTop: 32, padding: 24, border: "1px solid #e5e7eb", borderRadius: 16, background: "white" }}>
          <h3 style={{ marginBottom: 16 }}>Selected CV details</h3>
          <div style={{ display: "grid", gap: 12 }}>
            <div>
              <strong>Name:</strong> {selectedFile.name}
            </div>
            <div>
              <strong>Size:</strong> {Math.round(selectedFile.size / 1024)} KB
            </div>
            <div>
              <strong>Uploaded At:</strong> {new Date(selectedFile.uploadedAt).toLocaleString()}
            </div>
            <div>
              <strong>Internal ID:</strong> {selectedFile.internalName}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
