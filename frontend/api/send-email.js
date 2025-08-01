// frontend/api/send-email.js

import nodemailer from 'nodemailer';
import process from 'node:process';

export default async function handler(req, res) {
  // Hanya izinkan request dengan metode POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  const { name, email, message } = req.body;

  // Validasi input sederhana
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Semua kolom wajib diisi.' });
  }

  // Konfigurasi Nodemailer (mengambil dari Environment Variables)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Opsi Email
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.GMAIL_USER, // Kirim ke emailmu sendiri
    subject: `Pesan Baru dari Portofolio - ${name}`,
    text: `Pesan dari: ${name} (${email})\n\n${message}`,
  };

  try {
    // Kirim email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Pesan berhasil terkirim!' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    res.status(500).json({ message: 'Gagal mengirim pesan.' });
  }
}