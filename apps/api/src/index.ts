import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cvRouter from "./routes/cv";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 4000;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/cv", cvRouter);

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
