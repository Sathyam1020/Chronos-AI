import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/message", (req: any, res: any) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }
  res.json({ reply: `You said: "${message}". This is a placeholder response.` });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is healthy" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
