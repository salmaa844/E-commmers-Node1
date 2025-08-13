# 🛒 E-commerce API
This repository contains a Node.js API for an E-commerce platform that allows users to register, browse products, add items to their cart, place orders, and leave product reviews. It provides endpoints for creating, retrieving, updating, and deleting users, products, orders, carts, and reviews. The system uses MongoDB via Mongoose for database interaction.


# ✅ Features
🔑 User authentication and authorization.

🛍 View product details, and search products.

🛒 Add products to cart and manage cart items

📝 Add, update, and retrieve product reviews.

💾 Data storage with MongoDB database using Mongoose  



# 🛠 Tech Stack
Backend: Node.js, Express.js

Database: MongoDB (via Mongoose)

Authentication: JWT (JSON Web Token)

Validation: Joi

File uploads: Multer

Email notifications: Nodemailer

Scheduling tasks: Node-cron

Unique IDs: Nanoid

Security: Bcrypt

CORS support: cors

Environment variables: dotenv




# ⚙️Prerequisites
Before running the API, make sure you have the following installed:

- Node.js
- MongoDB Database

# 🚀 Installation

1. Clone the Repository
```bash
git clone https://github.com/salmaa844/E-commmers-Node1.git

```
2. Navigate to the project directory
```bash
cd E-commmers-Node1

```
3. Install dependencies:
```bash
npm install
```
4. Create a .env file in the root directory and add the following environment variables
```bash
PORT=your_server_port
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL=your_email@gmail.com
EMAIL_PASS=your_email_password
SALT=number_of_salt

```
5. Start the server: 
```bash
npm run dev
```
# 🌐API Overview

### Authentication

- POST /api/auth/register — Register new user
- POST /api/auth/login — Login user

### Products
GET /api/products — Get all products

GET /api/products/:id — Get product details

POST /api/products — Create new product (Admin)

PUT /api/products/:id — Update product (Admin)

DELETE /api/products/:id — Delete product (Admin)

### Cart
POST /api/cart — Add product to cart

GET /api/cart — Get user's cart items

PUT /api/cart/:id — Update cart item quantity

DELETE /api/cart/:id — Remove item from cart

### Orders
POST /api/order/add — Place an order

GET /api/order — Get user's orders

GET /api/order/:id — Get order details

### Reviews
POST /api/reviews — Add a product review

GET /api/reviews — Get product reviews


  
## Example Request
###Create Order
```bash
POST /api/order/add
Authorization: Bearer <token>
{
    "address":"ramallah",
    "phone":"0598",
    "paymentType":"cash",
    "couponCode":"SALE"
}
```




