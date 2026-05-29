# VaultHub

VaultHub is a MERN workspace for Vikram C. Nilaji. It combines secure authentication, an expense tracker, a calculator, and productivity modules in one React application.

## Live Demo

- Portfolio: https://vikramsvaulthub-theta.vercel.app/
- Backend API: https://vaulthub-xm1r.onrender.com

## Features

- Login, signup, and guest access flows
- JWT-protected dashboard
- Expense tracker with add, list, edit, delete, and total views
- Calculator module
- Responsive layouts for desktop, tablet, and mobile

## Tech Stack

- Frontend: React, Vite, React Router, CSS, lucide-react
- Backend: Node.js, Express.js, MongoDB, Mongoose
- Authentication: JWT, bcrypt
- Tools and deployment: GitHub, Render, Vercel, Postman

## Screenshots

![VaultHub dashboard](./vault-dashboard-preview.png)

## Local Setup

Install frontend dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Backend Setup

From `auth-portal/backend`:

```bash
npm install
npm run dev
```

Required backend environment variables:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## API Documentation

Backend routes are documented in [`../../docs/API.md`](../../docs/API.md).

## Notes

- The profile page/section has been removed from this project.
- Keep the dashboard focused on workspace modules: expenses, calculator, and planned productivity features.
