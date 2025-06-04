import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    try {
        // Log the current working directory
        console.log('Current working directory:', process.cwd());

        // Construct the path to Banner.json
        const filePath = path.join(process.cwd(), 'data', 'Banner.json');
        console.log('Constructed file path:', filePath);

        // Check if the file exists
        if (!fs.existsSync(filePath)) {
        throw new Error(`Banner.json not found at ${filePath}`);
        }

        // Read and parse the JSON file
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(jsonData);

        // Return the parsed data
        return res.status(200).json(data);
    } catch (error) {
        console.error('API /banner error:', error);
        return res.status(500).json({ error: 'Failed to load Banner data' });
    }
}
