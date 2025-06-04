import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    try {
        const filePath = path.join(process.cwd(), 'data', 'Product.json');
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(jsonData);
        return res.status(200).json(data);
    } catch (error) {
        console.error('API /product error:', error);
        return res.status(500).json({ error: 'Failed to load Product data' });
    }
}
