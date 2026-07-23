import UploadCV from "./components/UploadCV";

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: "Inter, sans-serif" }}>
      <h1>CareerPilot</h1>
      <p>Bienvenido al piloto de CareerPilot. Comienza subiendo tu CV para encontrar ofertas compatibles.</p>
      <UploadCV />
    </div>
  );
}
