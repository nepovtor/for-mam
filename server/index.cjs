const express = require('express');
const path = require('path');
const Database = require('better-sqlite3');
require('dotenv').config();

const app = express();
app.use(express.json());

const DB_FILE = path.join(__dirname, 'signups.db');
const db = new Database(DB_FILE);
db.prepare(`
  CREATE TABLE IF NOT EXISTS signups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    date TEXT NOT NULL
  )
`).run();
const insertSignup = db.prepare(
  'INSERT INTO signups (name, email, phone, date) VALUES (?, ?, ?, ?)'
);

async function notifyTelegram(name, email, phone) {
  const token = process.env.TELEGRAM_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) return;
  try {
    const text = `New registration:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`;
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chat, text })
    });
  } catch (err) {
    console.error('Failed to send telegram message', err);
  }
}

app.post('/api/signup', (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email and phone are required' });
  }
  try {
    insertSignup.run(name, email, phone, new Date().toISOString());
    notifyTelegram(name, email, phone);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to save data' });
  }
  res.json({ success: true });
});

// Serve built frontend if available
const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
