# ⚙️ Backend - Task Management System

This is the **backend** of the MERN stack **Task Management System** project. It is built using **Node.js**, **Express**, and **MongoDB**. The backend provides secure RESTful APIs for user authentication, task creation, and management.

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT)
- bcryptjs (for password hashing)
- dotenv (environment variable management)
- cors (cross-origin requests)
- nodemon (for development)

## 📂 Folder Structure



## 🌐 API Endpoints

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| POST   | /api/auth/register | Register a new user       |
| POST   | /api/auth/login    | Login a user              |
| GET    | /api/tasks         | Get all tasks             |
| POST   | /api/tasks         | Create a new task         |
| PUT    | /api/tasks/:id     | Update a task             |
| DELETE | /api/tasks/:id     | Delete a task             |

## 🔐 Environment Variables

Create a `.env` file in the root directory of the backend with the following values:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## 🛠️ Setup Instructions
1. **Clone the repository**
```bash
   git clone https://github.com/smitmorjariya/Task-Manager.git
```

2. **Navigate to the backend folder**
```bash
   cd Task-Manager/backend
```

3. **Install Dependencies**
```bash
npm install
```
3. **Install Dependencies**
```bash
npm run dev
```
Server will start at http://localhost:8000.

##⚙️ Scripts
● npm run dev - starts the server with nodemon.

● npm start - starts the server normally (production mode).

##🔐 Authentication
● User passwords are hashed using bcryptjs.
● Protected routes use a verifyToken middleware to validate JWT.


##🧠 Logic Overview
● Users register and receive a token.

● Authenticated users can create, view, update, and delete their tasks.

● Task data is stored in MongoDB.

##Make sure to:

● Set environment variables in the deployment platform.

● Allow CORS from your frontend domain.
