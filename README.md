# 🛒 E-commerce API
This repository contains a Node.js API for an E-commerce platform that allows users to register, browse products, add items to their cart, place orders, and leave product reviews. It provides endpoints for creating, retrieving, updating, and deleting users, products, orders, carts, and reviews. The system uses MongoDB via Mongoose for database interaction.


# ✅ Features
🔑 User authentication and authorization.

🎓 Enroll in and manage courses.

📝 Add, update, and retrieve course reviews.

💾 Data storage with MySQL database using Sequelize ORM.  



# 🛠 Tech Stack
- Backend: Node.js, Express.js
- Database: MySQL (via Sequelize ORM)
- Authentication: JWT (JSON Web Token)
# ⚙️Prerequisites
Before running the API, make sure you have the following installed:

- Node.js
- MySQL Database

# 🚀 Installation

1. Clone the Repository
```bash
git clone https://github.com/salmaa844/project1_orm.git

```
2. Navigate to the project directory
```bash
cd project1_orm

```
3. Install dependencies:
```bash
npm install
```
4. Create a .env file in the root directory and add the following environment variables
```bash
PORT=your_server_port
DB_HOST=localhost
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_DIALECT=mysql

JWT_SECRET=your_jwt_secret

EMAIL=your_email@gmail.com
EMAIL_PASS=your_email_password
```
5. Start the server: 
```bash
npm run dev
```
# 🌐API Overview

### Authentication

- POST /api/auth/register — Register new user
- POST /api/auth/login — Login user

### Courses

- GET /api/courses — Get all courses
- POST /api/courses — Create new course (Admin)

### Enrollments

- POST /api/enrollments — Enroll in a course
- GET /api/enrollments — Get my enrolled courses

### Reviews

- POST /api/reviews — Add a review
- GET /api/reviews — Get reviews
  
## Example Request
###Create course
```bash
POST /api/courses
Authorization: Bearer <token>
{
  "title": "JavaScript Basics",
  "description": "Learn the fundamentals of JavaScript.",
  "price": 49.99
}
```




