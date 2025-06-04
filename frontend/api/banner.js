import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    // Log current working directory
    console.log('process.cwd():', process.cwd());

    // Try different possible paths
    const possiblePaths = [
      path.join(process.cwd(), 'data', 'Banner.json'),          // usual relative path
      path.join(process.cwd(), 'frontend', 'data', 'Banner.json'), // if cwd is project root
      path.join(process.cwd(), '..', 'frontend', 'data', 'Banner.json'), // if cwd is api folder inside frontend
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
      console.error('Banner.json file NOT found in any expected location!');
      return res.status(500).json({ error: 'Banner.json file NOT found!' });
    }

    console.log('Using Banner.json file at:', filePath);

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return res.status(200).json(data);
  } catch (err) {
    console.error('Error loading Banner data:', err);
    return res.status(500).json({ error: 'Failed to load Banner data' });
  }
}
