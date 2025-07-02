# 🧠 DeepSeek API Handler

Middleware API handler do proxywania zapytań do **DeepSeek Reasoner**.  
Zaprojektowany w Express, gotowy do hostowania np. na Railway.

---

## 🚀 Funkcje

- Odbiera zapytania z frontendu (np. React, Vite)
- Ukrywa klucz `DEEPSEEK_API_KEY`
- Forwarduje zapytanie do DeepSeek Reasoner
- Zwraca odpowiedź w formacie JSON

---

## ⚙️ Wymagania

- Node.js >= 18
- Railway (lub inny hosting obsługujący Node.js)
- Klucz API do DeepSeek Reasoner

---

## 💻 Uruchomienie lokalnie

### 1️⃣ Sklonuj repo

```bash
git clone https://github.com/TWOJ-USER/TWOJE-REPO.git
cd TWOJE-REPO
