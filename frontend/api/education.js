// frontend/api/education.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const lang = req.query.lang || 'id'; // Ambil bahasa dari query param

  try {
    const education = await prisma.education.findMany({
      where: {
        language: lang, // Filter berdasarkan bahasa
      },
      orderBy: {
        id: 'asc', // Urutkan dari id terkecil (paling lama ke terbaru)
      },
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(education);
  } catch (error) {
    console.error('Error fetching education data from database:', error);
    res.status(500).json({ message: 'Gagal mengambil data edukasi.' });
  } finally {
    await prisma.$disconnect();
  }
}