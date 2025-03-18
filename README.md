# ecommerce-website
ecommerce website project for Workshop on Implementation of Software Design project assignment

Use JSON Server (Easiest for Mock Data)
You can create a local REST API without setting up a database using json-server.

Steps:
Install JSON Server:
sh
Copy
Edit
npm install -g json-server
Create a db.json file in your project root with sample data:
json
Copy
Edit
{
  "products": [
    { "id": 1, "name": "Product 1", "price": 10 },
    { "id": 2, "name": "Product 2", "price": 20 }
  ]
}
Start the server:
sh
Copy
Edit
json-server --watch db.json --port 5000
Change the API URL in your React app (MyContext.js):
js
Copy
Edit
const response = await axios.get('http://localhost:5000/products');
✅ Best for development, but data resets when you restart.