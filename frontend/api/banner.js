import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    try {
        // Use process.cwd() without 'frontend' here, because your 'data' folder is directly under frontend
        // If your api file is under frontend/api, process.cwd() points to root (ecommerce-website)
        // So adjust to frontend/data/Banner.json relative to root

        const filePath = path.join(process.cwd(), 'frontend', 'data', 'Banner.json');

        console.log('Reading Banner file from:', filePath);

        if (!fs.existsSync(filePath)) {
        console.error('File does NOT exist:', filePath);
        return res.status(500).json({ error: 'Banner file not found' });
        }

        const fileData = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(fileData);

        res.status(200).json(data);
    } catch (error) {
        console.error('Error loading banner:', error);
        res.status(500).json({ error: 'Failed to load Banner data' });
    }
}
