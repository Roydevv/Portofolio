// frontend/api/projects.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const lang = req.query.lang || 'id'; // Ambil bahasa dari query param

  try {
    const projects = await prisma.project.findMany({
      where: {
        language: lang, // Filter berdasarkan bahasa
      },
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects from database:', error);
    res.status(500).json({ message: 'Gagal mengambil data proyek.' });
  } finally {
    await prisma.$disconnect();
  }
}