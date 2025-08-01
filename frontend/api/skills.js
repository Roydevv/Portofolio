// frontend/api/skills.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: {
        percentage: 'desc', // Urutkan dari persentase tertinggi
      }
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(skills);
  } catch (error) {
    console.error('Error fetching skills from database:', error);
    res.status(500).json({ message: 'Gagal mengambil data skill.' });
  } finally {
    await prisma.$disconnect();
  }
}