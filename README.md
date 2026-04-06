# 📊 Finance Data Processing & Access Control Backend

## 🚀 Overview

This project is a backend system for a **Finance Dashboard Application** that manages financial records and enforces **Role-Based Access Control (RBAC)**.

It is designed to demonstrate strong backend engineering practices including:

* Clean architecture
* Secure authentication
* Role-based authorization
* Data validation
* Aggregation for analytics

---

## 🧠 Key Features

* 🔐 JWT-based Authentication
* 👥 Role-Based Access Control (Admin, Analyst, Viewer)
* 💰 Financial Records Management (CRUD + Filtering + Pagination)
* 📈 Dashboard Analytics (Income, Expense, Balance)
* ✅ Input Validation using Joi
* ⚠️ Centralized Error Handling
* 🧩 Modular & Scalable Architecture

---

## 🏗️ Architecture

The project follows a **feature-based modular architecture**:

* **Routes** → API endpoints
* **Controllers** → Handle request/response
* **Services** → Business logic
* **Models** → Database schema
* **Middleware** → Authentication, RBAC, validation, error handling

This ensures:

* Maintainability
* Scalability
* Clean separation of concerns

---

## 📁 Project Structure

```
finance-backend/
│
├── config/
├── modules/
│   ├── auth/
│   ├── user/
│   ├── finance/
│   └── dashboard/
│
├── middleware/
├── utils/
├── app.js
├── server.js
└── .env
```

---

## 🔐 Role-Based Access Control (RBAC)

| Role    | Permissions                             |
| ------- | --------------------------------------- |
| Admin   | Full access (users, finance, dashboard) |
| Analyst | View financial records and dashboard    |
| Viewer  | Access dashboard only                   |

### Implementation:

* Roles stored in database
* Included in JWT payload
* Enforced using `authorize` middleware

---

## 🔑 Authentication

* JWT-based authentication
* Secure password hashing using bcrypt
* Token required for protected routes

---

## 💰 Financial Records

Each financial record includes:

* Amount
* Type (income / expense)
* Category
* Date
* Notes

### Features:

* Create records (Admin only)
* View records (Admin, Analyst)
* Filtering by type and category
* Pagination support

---

## 📈 Dashboard

Provides aggregated financial insights:

* Total Income
* Total Expense
* Net Balance

Implemented using MongoDB aggregation pipelines.

---

## 🛡️ Validation & Error Handling

* Input validation implemented using **Joi**
* Handles:

  * Missing fields
  * Invalid data types
  * Incorrect values
* Global error handling middleware ensures consistent responses

---

## 🗄️ Database

* MongoDB used as the database
* Mongoose for schema modeling and queries

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* Joi
* dotenv
* CORS
* Postman

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```
git clone https://github.com/your-username/finance-backend.git
cd finance-backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Configure Environment Variables

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the Server

```
npm run dev
```

---

## 🌐 Deployment

### 🔗 Live API

https://finance-backend-sq10.onrender.com

### 🚀 Deployment Details

* Deployed on **Render**
* Database hosted on **MongoDB Atlas**
* Environment variables configured securely

### 🔄 Deployment Workflow

1. Make changes locally
2. Push to GitHub
3. Render automatically redeploys

---

## 🔌 API Endpoints

### 🔐 Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### 👥 Users (Admin Only)

* GET `/api/users`
* PUT `/api/users/:id/role`

### 💰 Finance

* GET `/api/finance` (Admin, Analyst)
* POST `/api/finance` (Admin)

### 📊 Dashboard

* GET `/api/dashboard` (All roles)

---

## 🧪 Testing

All APIs were tested using **Postman**, including:

* Authentication flow
* Role-based access control
* Validation errors
* Dashboard aggregation

---

## 💡 Assumptions

* Roles are predefined (admin, analyst, viewer)
* Viewer has access only to dashboard
* JWT is used for authentication
* MongoDB is used for persistence

---

## 📌 Important Note

Protected routes require a valid JWT token in the Authorization header:

```
Authorization: Bearer <your_token>
```

These routes cannot be accessed directly via browser without authentication.

---



## 🚀 Conclusion

This project demonstrates a **secure, scalable, and well-structured backend system** with:

* Clear separation of concerns
* Robust role-based access control
* Efficient data processing
* Production-ready practices

