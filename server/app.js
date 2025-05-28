import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3200;

// === MIDDLEWARE ===
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// === YOUR EXISTING ROUTES ===
app.get('/banner', (req, res) => {
  const data = getData('data/Banner.json');
  res.json(data);
});

app.get('/category', (req, res) => {
  const data = getData('data/Category.json');
  res.json(data);
});

app.get('/product', (req, res) => {
  const data = getData('data/Product.json');
  res.json(data);
});

app.get('/product/:id', (req, res) => {
  const data = findData(req.params.id);
  res.json(data);
});

// === HEALTH CHECK ROUTES ===
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.get('/health/detailed', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    checks: {
      database: 'OK',
      memory: {
        used: process.memoryUsage().heapUsed,
        total: process.memoryUsage().heapTotal,
      },
    },
  });
});

// === ERROR HANDLING MIDDLEWARE ===
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// === 404 HANDLER ===
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// === START SERVER ===
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// === HELPER FUNCTIONS ===
const getData = (path) => {
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data);
};

const findData = (id) => {
  const dataProduct = getData('data/Product.json');
  const findProduct = dataProduct.find((data) => data.id == id);
  if (!findProduct) {
    return [
      {
        id: 999,
        brand: 'not found',
        description: 'not found',
        price: 9999,
        promo: 9999,
        category: 'not found',
        image: [
          'https://raw.githubusercontent.com/arlecchi/image-hosting/refs/heads/main/Rectangle%205.png',
        ],
      },
    ];
  }
  return findProduct;
};
