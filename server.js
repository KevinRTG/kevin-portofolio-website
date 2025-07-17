require('dotenv').config(); // Pastikan ini di atas
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Konfigurasi CORS agar hanya mengizinkan domain frontend kamu
app.use(cors({
  origin: 'https://kevin-portofolio-website.vercel.app',
}));

app.use(express.json());

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Semua field harus diisi.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'kevinsuyadi2017@gmail.com',
      subject: `Pesan dari ${name}`,
      text: `Email: ${email}\n\nPesan:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Pesan berhasil dikirim!' });
  } catch (error) {
    console.error('Error saat mengirim email:', error);
    res.status(500).json({ message: 'Gagal mengirim pesan.', error: error.message });
  }
});

// Gunakan port dari environment (untuk Vercel)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
