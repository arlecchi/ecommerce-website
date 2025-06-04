import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    console.log('process.cwd():', process.cwd());

    const possiblePaths = [
      path.join(process.cwd(), 'data', 'Category.json'),
      path.join(process.cwd(), 'frontend', 'data', 'Category.json'),
      path.join(process.cwd(), '..', 'frontend', 'data', 'Category.json'),
    ];

    let filePath = null;
    for (const p of possiblePaths) {
      console.log('Checking:', p);
      if (fs.existsSync(p)) {
        filePath = p;
        break;
      }
    }

    if (!filePath) {
      console.error('Category.json file NOT found!');
      return res.status(500).json({ error: 'Category.json file NOT found!' });
    }

    console.log('Using Category.json file at:', filePath);

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return res.status(200).json(data);
  } catch (err) {
    console.error('Error loading Category data:', err);
    return res.status(500).json({ error: 'Failed to load Category data' });
  }
}
