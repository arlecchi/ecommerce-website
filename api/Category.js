// api/Category.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET') {
    try {
      const filePath = path.join(process.cwd(), 'server/data/Category.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const categories = JSON.parse(fileContents);
      
      res.status(200).json({ 
        success: true,
        categories: categories 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: 'Error fetching categories',
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