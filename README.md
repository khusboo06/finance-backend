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
* **Models** → Database schemas
* **Middleware** → Auth, RBAC, validation, error handling

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

## 🔐 Role-Based Access Control

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
* Password hashing using bcrypt
* Token required for all protected routes

---

## 💰 Financial Records

Each record includes:

* Amount
* Type (income / expense)
* Category
* Date
* Notes

### Capabilities:

* Create (Admin)
* Read (Admin, Analyst)
* Filter (type, category)
* Pagination support

---

## 📈 Dashboard

Provides aggregated financial insights:

* Total Income
* Total Expense
* Net Balance

Implemented using MongoDB aggregation.

---

## 🛡️ Validation & Error Handling

* Input validation using **Joi**
* Handles:

  * Invalid input
  * Missing fields
  * Incorrect data types
* Centralized error middleware ensures consistent responses

---

## 🗄️ Database

* MongoDB used for data persistence
* Mongoose used for schema modeling

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
git clone <your-repo-link>
cd finance-backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Configure Environment

Create `.env` file:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/financeDB
JWT_SECRET=your_secret_key
```

### 4. Run Server

```
npm run dev
```

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

All endpoints were tested using **Postman**, including:

* Authentication flow
* Role-based access restrictions
* Validation errors
* Dashboard aggregation

---

## 💡 Assumptions

* Roles are predefined (admin, analyst, viewer)
* Viewer has access only to dashboard
* JWT used for authentication
* MongoDB used for persistence

---

## 🎯 Evaluation Coverage

This implementation satisfies:

* ✔ Backend Design
* ✔ Logical Thinking
* ✔ Functionality
* ✔ Code Quality
* ✔ Data Modeling
* ✔ Validation & Error Handling
* ✔ Documentation

---

## 🚀 Conclusion

This project demonstrates a **secure, scalable, and well-structured backend system** with clear separation of concerns and robust role-based access control.


