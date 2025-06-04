// api/Banner.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET') {
    try {
      const filePath = path.join(process.cwd(), 'server/data/Banner.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const banners = JSON.parse(fileContents);
      
      res.status(200).json({ 
        success: true,
        banners: banners 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: 'Error fetching banners',
        error: error.message 
      });
    }
  } else {
    res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }
}