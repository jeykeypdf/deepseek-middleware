require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

app.post("/deepseek-reasoner", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Brakuje pola 'question' w body." });
  }

  if (!DEEPSEEK_API_KEY) {
    return res.status(500).json({ error: "Brak skonfigurowanego klucza DEEPSEEK_API_KEY." });
  }

  try {
    const response = await axios.post(
      "https://api.deepseek.com/v1/reasoner",
      {
        model: "deepseek-reasoner",
        messages: [{ role: "user", content: question }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("❌ Błąd DeepSeek:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ DeepSeek middleware działa na porcie: ${PORT}`);
});