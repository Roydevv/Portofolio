// /api/index.js

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import process from 'node:process';
import { data_id, data_en } from './data.js';

const app = express();

app.use(cors());
app.use(express.json());

// API untuk Email (menggunakan Environment Variables)
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // <-- AMBIL DARI ENV VARIABLE
      pass: process.env.GMAIL_PASS  // <-- AMBIL DARI ENV VARIABLE
    }
  });
  // ... (sisa kode nodemailer sama)
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.GMAIL_USER,
    subject: `Pesan Baru dari Portofolio dari ${name}`,
    text: `Anda mendapat pesan dari: ${name} (${email})\n\nPesan:\n${message}`
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Pesan berhasil terkirim!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Gagal mengirim pesan.');
  }
});

// API Routes
app.get('/api/education', (req, res) => {
  const lang = req.query.lang || 'id';
  res.json(lang === 'en' ? data_en.education : data_id.education);
});

app.get('/api/skills', (req, res) => {
  const lang = req.query.lang || 'id';
  res.json(lang === 'en' ? data_en.skills : data_id.skills);
});

app.get('/api/projects', (req, res) => {
  const lang = req.query.lang || 'id';
  res.json(lang === 'en' ? data_en.projects : data_id.projects);
});

// PENTING: Hapus app.listen dan export app
export default app;