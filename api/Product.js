// api/Product.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Enable CORS for your frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET') {
    try {
      // Read the Product_Data.json file
      const filePath = path.join(process.cwd(), 'server/data/Product_Data.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const products = JSON.parse(fileContents);
      
      res.status(200).json({ 
        success: true,
        products: products 
      });
    } catch (error) {
      console.error('Error reading product data:', error);
      res.status(500).json({ 
        success: false,
        message: 'Error fetching products',
        error: error.message 
      });
    }
  } else if (req.method === 'POST') {
    // Handle adding new products
    try {
      const newProduct = req.body;
      
      // Read existing products
      const filePath = path.join(process.cwd(), 'server/data/Product_Data.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const products = JSON.parse(fileContents);
      
      // Add new product with ID
      const newId = Math.max(...products.map(p => p.id || 0)) + 1;
      const productWithId = { ...newProduct, id: newId };
      products.push(productWithId);
      
      // Write back to file
      fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
      
      res.status(201).json({
        success: true,
        message: 'Product added successfully',
        product: productWithId
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error adding product',
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