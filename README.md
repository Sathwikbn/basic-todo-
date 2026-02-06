# Advanced Android To-Do Platform

A production-ready blueprint for an advanced Android task management system. This repository now includes a **React + TypeScript** mobile-first frontend (Capacitor-ready) and a **Node.js/Express** backend with MongoDB models, JWT auth, and real-time collaboration scaffolding.

## Project Structure

```
.
├── backend/              # Express + MongoDB API
└── frontend/             # React + TypeScript + Tailwind + Capacitor app
```

## Frontend Highlights (React + TypeScript)

- **Mobile-first UI** with Tailwind CSS and Framer Motion animations.
- **State management** via Zustand.
- **API data layer** using React Query.
- **Capacitor configuration** for Android builds.
- **Offline support** using Capacitor Storage utilities.

### Frontend Scripts

```bash
cd frontend
npm install
npm run dev
```

### Capacitor Android Setup

```bash
cd frontend
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

> Update `capacitor.config.ts` and Android Studio assets for the app icon and splash screen.

## Backend Highlights (Node.js + Express)

- **RESTful API** with JWT authentication.
- **Role-based access control** middleware.
- **MongoDB models** for users, tasks, reminders, subtasks, and collaboration.
- **Socket.io** real-time collaboration channel.
- **Swagger** API documentation scaffold.

### Backend Scripts

```bash
cd backend
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in `backend/`:

```
PORT=4000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/advanced-todo
JWT_SECRET=super-secret
CLIENT_ORIGIN=http://localhost:5173
```

## Feature Coverage

### Authentication
- Signup, login, logout, forgot password
- JWT security and bcrypt password hashing
- Google login placeholder (to be integrated with Firebase/Auth0)

### Task Management
- Tasks with priority, tags, due dates, notes, recurrence, and attachments
- Subtasks, reminders, and status tracking

### Smart Scheduling + Analytics
- Calendar, timeline, and planner layouts
- Streak tracking and productivity insights

### Collaboration + Offline
- Socket.io real-time updates
- Offline storage utilities and sync-ready architecture

### Android Requirements
- Capacitor configuration, permissions, and Android Studio-ready setup
- Push notification placeholders for Firebase Cloud Messaging
- Background reminder scheduling (to be wired via native plugins)

## Next Implementation Steps

- Wire Firebase Cloud Messaging tokens in the backend.
- Integrate S3/Cloudinary uploads for attachments.
- Add Redis for background jobs and caching.
- Build task analytics charts and advanced scheduling UI.
- Implement AI services for suggestions and auto-tagging.

## Testing

Backend tests and frontend unit/integration suites can be added with Vitest/Jest + Supertest.

---

**Status:** Foundational architecture and scaffolding is in place for all requested modules.
