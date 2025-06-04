import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { id } = req.query;
    const filePath = path.resolve('./data/Product.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    const product = data.find(p => p.id == id);

    if (!product) {
        return res.status(404).json({
        id: 999,
        brand: 'not found',
        description: 'not found',
        price: 9999,
        promo: 9999,
        category: 'not found',
        image: [
            'https://raw.githubusercontent.com/arlecchi/image-hosting/refs/heads/main/Rectangle%205.png',
        ],
        });
    }

    res.status(200).json(product);
}
