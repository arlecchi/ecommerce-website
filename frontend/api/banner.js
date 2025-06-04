import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'Banner.json');
    console.log('Looking for Banner.json at:', filePath);
    const exists = fs.existsSync(filePath);
    console.log('Banner.json exists:', exists);
    if (!exists) throw new Error('File does not exist');

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    res.status(200).json(data);
  } catch (err) {
    console.error('Failed to load Banner data:', err);
    res.status(500).json({ error: 'Failed to load Banner data' });
  }
}
