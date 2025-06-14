# MerchVerse e-commerce website

An e‑commerce website project developed for Workshop on Implementation of Software Design.

This application allows users to browse, search, and order merchandise products online. Customers can view search products, product details, add items to a wishlist or shopping cart, and complete purchases with manual payment confirmation. Administrators can manage products, validate payments, and handle order fulfillment.

---

## Deployed Live Site

- **Vercel Link**: https://ecommerce-website-xhmb.vercel.app  

---

## Project Overview

### Features

**For Customers**
- View, search, and filter products  
- Add products to cart or wishlist  
- Choose shipping type, address, and payment methods

**For Administrators**
- Add, update, and delete products  
- Check and manage product stock  
- Validate payment receipts  
- Ship products and update delivery status  

### Tech Stack

**Frontend**: React, React Router, Axios, Context API 

**Backend**: Node.js, Express, later on serverless      

**Database**: data API in backend and serverless

**Deployment**:  Vercel (Frontend), Docker (Local Dev)  

---

## Setup Instructions

### Option 1: Manual Setup

1. **Start the Backend (API)**
   ```bash
   cd server
   npm install
   node app.js
   ```
2. **Start the Frontend (React)**
   ```bash
   cd frontend
   npm install
   npm start  
   ```
### Option 2: Docker Setup
1. From the repository root:
   ```bash
   docker compose up --build
   ```
   This command will:

   Build the backend image using Dockerfile.backend

   Build the frontend image using Dockerfile.frontend

   Start both services and expose:

       Backend on port 3200

       Frontend on port 3000
2. To stop and remove containers:
   ```bash
   cd frontend
   npm install
   npm start  
   ```

## System Architecture

### Frontend
- Built using **React** (Create React App)
- **Context API** for global state management (e.g., user data, products, cart)
- **Axios** for making HTTP requests to the backend
- Component structure separates pages, layouts, and reusable UI elements
- Handles routing with **React Router**

### Backend
- **Serverless architecture** using Node.js functions
- Acts as a REST API to serve product data and manage transactions
- Deployed as part of the fullstack app (e.g., through Vercel functions or equivalent)

### Integration
- Frontend consumes the API via Axios calls (e.g., in `MyContext.js`)
- All product-related functionality (view, cart, purchase) is dynamically fetched
- Backend runs on port `3200` during development and integrates seamlessly in production

### DevOps
- Dockerfiles for both frontend and backend located at project root
- `docker-compose.yml` to build and run containers
- Supports local development as well as containerized deployment

---

## User Guide

### For Customers
- **Browse products** on the homepage
- **Search and filter** through categories and product names
- **Add items** to the shopping cart or wishlist
- **Proceed to checkout**, choosing shipping and payment method

### For Admins
- **Add new products** with name, description, price, and image
- **Edit or delete** existing product listings
- **Monitor inventory** and update stock quantities
