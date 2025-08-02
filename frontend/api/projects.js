// frontend/api/projects.js
import { data_id, data_en } from '../../backend/data.js';

export default async function handler(req, res) {
  const lang = req.query.lang || 'id'; // Default ke 'id'

  try {
    const projectsData = lang === 'en' ? data_en.projects : data_id.projects;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(projectsData);
  } catch (error) {
    console.error('Error reading projects data:', error);
    res.status(500).json({ message: 'Gagal mengambil data proyek.' });
  }
}
