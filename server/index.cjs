const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'signups.json');

function loadData() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.post('/api/signup', (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email and phone are required' });
  }
  const signups = loadData();
  signups.push({ name, email, phone, date: new Date().toISOString() });
  try {
    saveData(signups);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to save data' });
  }
  res.json({ success: true });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
