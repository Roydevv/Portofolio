// frontend/api/skills.js
import { data_id, data_en } from '../../backend/data.js';

export default async function handler(req, res) {
  // Data skill tidak memiliki bahasa di data.js, jadi kita pakai salah satu saja
  try {
    const skillsData = data_id.skills;

    // Urutkan dari persentase tertinggi
    skillsData.sort((a, b) => b.percentage - a.percentage);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(skillsData);
  } catch (error) {
    console.error('Error reading skills data:', error);
    res.status(500).json({ message: 'Gagal mengambil data skill.' });
  }
}
