// frontend/api/education.js
import { data_id, data_en } from '../../backend/data.js';

export default async function handler(req, res) {
  const lang = req.query.lang || 'id'; // Default ke 'id'

  try {
    const educationData = lang === 'en' ? data_en.education : data_id.education;

    // Urutkan data jika perlu (contoh: dari id terkecil)
    educationData.sort((a, b) => a.id - b.id);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(educationData);
  } catch (error) {
    console.error('Error reading education data:', error);
    res.status(500).json({ message: 'Gagal mengambil data edukasi.' });
  }
}
