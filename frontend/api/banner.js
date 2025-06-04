import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    // Correct path relative to the root of the project
    const filePath = path.join(process.cwd(), 'frontend', 'data', 'Banner.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileData);

    res.status(200).json(data);
  } catch (error) {
    console.error('Error loading banner:', error);
    res.status(500).json({ error: 'Failed to load Banner data' });
  }
}
