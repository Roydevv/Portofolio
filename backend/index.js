// backend/index.js

// Import modul yang dibutuhkan
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { data_id, data_en } = require('./data'); // Mengimpor data dari data.js

// Buat instance aplikasi Express
const app = express();

// Middleware CORS untuk mengizinkan permintaan dari frontend Anda
// Penting: Sesuaikan 'http://localhost:5173' jika frontend Anda berjalan di port lain
app.use(cors({
  origin: 'http://localhost:5173', // Port default untuk Vite/Vue dev server
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware untuk parsing JSON dari request body
app.use(express.json());

// --- API ROUTES ---

// Rute untuk mendapatkan data profil
app.get('/api/profile', (req, res) => {
  // Anda bisa menambahkan logika untuk memilih bahasa (data_id atau data_en)
  // Berdasarkan query parameter (misalnya ?lang=en) atau header Accept-Language
  const lang = req.query.lang || 'en'; // Default ke 'en' (English)
  if (lang === 'id') {
    res.json(data_id.profile);
  } else {
    res.json(data_en.profile);
  }
});

// Rute untuk mendapatkan data proyek
app.get('/api/projects', (req, res) => {
  const lang = req.query.lang || 'en';
  if (lang === 'id') {
    res.json(data_id.projects);
  } else {
    res.json(data_en.projects);
  }
});

// Rute untuk mendapatkan data keahlian
app.get('/api/skills', (req, res) => {
  const lang = req.query.lang || 'en';
  if (lang === 'id') {
    res.json(data_id.skills);
  } else {
    res.json(data_en.skills);
  }
});

// Rute untuk mendapatkan data pendidikan
app.get('/api/education', (req, res) => {
  const lang = req.query.lang || 'en';
  if (lang === 'id') {
    res.json(data_id.education);
  } else {
    res.json(data_en.education);
  }
});

// Rute untuk mengirim email (fitur kontak)
// Ini memerlukan pengaturan ENVIRONMENT VARIABLES (GMAIL_USER, GMAIL_PASS) di file .env backend Anda
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Pastikan variabel lingkungan ada
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error("GMAIL_USER atau GMAIL_PASS tidak diatur di environment variables.");
    return res.status(500).json({ message: 'Server email tidak terkonfigurasi dengan benar.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Alamat email Gmail Anda
      pass: process.env.GMAIL_PASS  // App Password dari Gmail Anda
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.GMAIL_USER, // Alamat email Anda yang akan menerima pesan
    subject: `Pesan Baru dari Portofolio dari ${name}`,
    text: `Anda mendapat pesan dari: ${name} (${email})\n\nPesan:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Pesan berhasil terkirim dari:', email);
    res.status(200).json({ message: 'Pesan berhasil terkirim!' });
  } catch (error) {
    console.error('Gagal mengirim pesan email:', error);
    res.status(500).json({ message: 'Gagal mengirim pesan.' });
  }
});


// --- PENANGANAN ERROR / RUTE TIDAK DITEMUKAN ---

// Middleware untuk menangani rute yang tidak ditemukan (404 Not Found)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Rute API tidak ditemukan.' });
});

// --- MENJALANKAN SERVER ---

// Mengambil port dari environment variable (file .env) atau menggunakan default 3000
const PORT = process.env.PORT || 3000;

// Memulai server dan mendengarkan pada port yang ditentukan
app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
  console.log('Pastikan frontend Anda mengakses API di URL ini.');
});