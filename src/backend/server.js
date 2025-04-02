const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const OpenAI = require("openai");
require("dotenv").config();


const app = express();
const port = 500;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({storage : storage});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post("/upload", upload.single("resume"), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  
    try {
      const resumeText = req.file.buffer.toString("utf-8");
  
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: `Analyze this resume:\n${resumeText}` }],
      });
  
      res.json({ analysis: response.choices[0].message.content });
    } catch (error) {
      res.status(500).json({ error: "AI analysis failed" });
    }
  });
  
app.listen(port, () => console.log(`Server running on port ${port}`));