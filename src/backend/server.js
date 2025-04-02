const express = require("express");
const cors = require("cors");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// OpenAI API Initialization
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Multer setup (store file in memory, not disk)
const upload = multer({ storage: multer.memoryStorage() });

// Upload and analyze file (No folder, direct processing)
app.post("/upload", upload.single("resume"), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    try {
        // Extract text from the uploaded PDF
        const pdfData = await pdfParse(req.file.buffer);
        const resumeText = pdfData.text; 

        console.log("Extracted Resume Text:", resumeText.substring(0, 500)); // Log first 500 chars

        // AI Resume Analysis
        const aiResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are an expert resume reviewer." },
                { role: "user", content: `Analyze this resume and give feedback:\n\n${resumeText}` },
            ],
            temperature: 0.7,
        });

        const analysis = aiResponse.choices[0]?.message?.content || "No analysis available.";

        res.json({ message: "File uploaded and analyzed successfully!", analysis });

    } catch (error) {
        console.error("❌ Error processing file:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
