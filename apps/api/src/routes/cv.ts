import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import prisma from "../db";

const uploadsPath = path.join(__dirname, "../../uploads");
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}

const upload = multer({ dest: uploadsPath });
const router = Router();

router.post("/upload", upload.single("cv"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const filePath = path.relative(path.join(__dirname, "../.."), req.file.path);
  const fileName = req.file.originalname;

  const cv = await prisma.cV.create({
    data: {
      originalName: fileName,
      internalName: req.file.filename,
      path: filePath,
      size: req.file.size,
    },
  });

  return res.status(200).json({
    message: `Tu CV "${fileName}" se cargó correctamente.`,
    file: {
      id: cv.id,
      name: cv.originalName,
      internalName: cv.internalName,
      path: cv.path,
      size: cv.size,
      uploadedAt: cv.uploadedAt,
    },
  });
});

router.get("/list", async (req, res) => {
  try {
    const files = await prisma.cV.findMany({
      orderBy: { uploadedAt: "desc" },
    });

    return res.status(200).json({ files: files.map((file) => ({
      id: file.id,
      internalName: file.internalName,
      name: file.originalName,
      size: file.size,
      uploadedAt: file.uploadedAt,
    })) });
  } catch (error) {
    return res.status(500).json({ error: "Unable to list uploaded CVs" });
  }
});

export default router;
