import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'Category.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    res.status(200).json(data);
  } catch (err) {
    console.error('Failed to load Category data:', err);
    res.status(500).json({ error: 'Failed to load Category data' });
  }
}
