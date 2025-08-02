// backend/index.js

// Mengubah dari 'require' menjadi 'import'
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { data_id, data_en } from './data.js'; // Pastikan './data.js' ada

// Buat instance aplikasi Express
const app = express();

// Middleware CORS
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware untuk parsing JSON
app.use(express.json());

// --- API ROUTES ---

// Rute untuk mendapatkan data proyek
app.get('/api/projects', (req, res) => {
  const lang = req.query.lang || 'en';
  res.json(lang === 'id' ? data_id.projects : data_en.projects);
});

// Rute untuk mendapatkan data keahlian
app.get('/api/skills', (req, res) => {
  const lang = req.query.lang || 'en';
  res.json(lang === 'id' ? data_id.skills : data_en.skills);
});

// Rute untuk mendapatkan data pendidikan
app.get('/api/education', (req, res) => {
  const lang = req.query.lang || 'en';
  res.json(lang === 'id' ? data_id.education : data_en.education);
});

// Rute untuk mengirim email (fitur kontak)
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error("GMAIL_USER atau GMAIL_PASS tidak diatur.");
    return res.status(500).json({ message: 'Server email tidak terkonfigurasi.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.GMAIL_USER,
    subject: `Pesan Baru dari Portofolio dari ${name}`,
    text: `Anda mendapat pesan dari: ${name} (${email})\n\nPesan:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Pesan berhasil terkirim!' });
  } catch (error) {
    console.error('Gagal mengirim email:', error);
    res.status(500).json({ message: 'Gagal mengirim pesan.' });
  }
});

// --- PENANGANAN ERROR ---
app.use((req, res, next) => {
  res.status(404).json({ message: 'Rute API tidak ditemukan.' });
});

// --- MENJALANKAN SERVER ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});