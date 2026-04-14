# Experiment 8: Role-Based Authentication System

This project is a full-stack implementation of a Role-Based Authentication system using a React frontend and a Node.js/Express backend. It demonstrates a secure login flow where a mock JWT (JSON Web Token) is used to authorize access to protected resources.

## 🚀 Features

- **JWT-Based Authentication**: Secure login flow providing a token for authorized requests.
- **Protected API Routes**: Backend endpoints that validate the authorization header.
- **Responsive Dashboard**: A modern React-based user interface using Material UI (MUI).
- **Session Persistence**: Authentication states managed within the frontend.
- **Micro-animations & Modern UI**: Leveraging MUI for a premium look and feel.

## 🛠️ Technology Stack

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Material UI (MUI)](https://mui.com/), [Bootstrap](https://getbootstrap.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Middleware**: [CORS](https://github.com/expressjs/cors)

## 📂 Project Structure

```text
experiment_8/
├── backend/            # Express.js server
│   ├── server.js       # Main entry point and API definitions
│   └── package.json    # Backend dependencies
├── frontend/           # React application
│   ├── src/            # Components, styles, and logic
│   ├── public/         # Static assets
│   ├── index.html      # Entry point
│   └── package.json    # Frontend dependencies
└── screenshots/        # Visual demonstration of the application
```

## ⚙️ Setup Instructions

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   *The server will run on [http://localhost:5000](http://localhost:5000).*

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   *The application will run on [http://localhost:5173](http://localhost:5173) (default Vite port).*

## 🔒 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/login` | Validates credentials and returns a mock JWT token. |
| `GET` | `/protected` | Requires `Authorization: Bearer <token>`. Returns protected data. |

## 📸 Screenshots

Checkout the application in action:

![Login Page](./screenshots/Screenshot%20(615).png)
*Figure 1: Login Interface*

![Dashboard](./screenshots/Screenshot%20(616).png)
*Figure 2: Protected Dashboard View*

---

> [!NOTE]
> This is an experimental project designed to demonstrate the integration of JWT authentication in a React + Express environment.
