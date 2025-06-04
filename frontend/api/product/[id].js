import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    try {
        const { id } = req.query; // dynamic route /api/product/123
        const filePath = path.join(process.cwd(), 'data', 'Product.json');
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const allProducts = JSON.parse(jsonData);

        const found = allProducts.find((item) => item.id == id);
        if (!found) {
        // You can return a 404 or your “not found” object
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

        return res.status(200).json(found);
    } catch (error) {
        console.error('API /product/[id] error:', error);
        return res.status(500).json({ error: 'Failed to load Product by ID' });
    }
}
