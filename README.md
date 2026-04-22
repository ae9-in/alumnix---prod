# Alumnix Monorepo

This project is structured as a monorepo with a clear separation between the frontend and backend services.

## Structure
- **/frontend**: Next.js 14 application (UI & Auth).
- **/backend**: Prisma ORM, Database Schema, and Core Services.

## Getting Started
1. Install dependencies in both folders:
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```
2. Set up your `.env` in both directories.
3. Run the development server:
   ```bash
   cd frontend && npm run dev
   ```

## Technology Stack
- **Frontend**: Next.js, TailwindCSS, Framer Motion.
- **Backend**: MongoDB, Prisma ORM, NextAuth.
- **Real-time**: Server-Sent Events (SSE).
