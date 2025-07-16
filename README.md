# Truck Inspection System

A comprehensive truck inspection system with web and mobile interfaces, built with modern technologies and connected to an existing PostgreSQL database.

## Architecture

- **Frontend**: React 18 + TypeScript + Vite + ShadCN/ui + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript + Drizzle ORM
- **Database**: PostgreSQL (existing TCIInspections database)
- **Mobile**: React Native or Flutter (to be implemented)

## Project Structure

```
truck-inspection-system/
├── packages/
│   ├── backend/           # Express.js API server
│   │   ├── src/
│   │   │   ├── db/        # Database schema and connection
│   │   │   ├── routes/    # API route handlers
│   │   │   ├── middleware/# Express middleware
│   │   │   ├── types/     # TypeScript type definitions
│   │   │   └── utils/     # Utility functions
│   │   └── package.json
│   └── frontend/          # React web application
│       ├── src/
│       │   ├── components/# React components
│       │   ├── pages/     # Page components
│       │   ├── hooks/     # Custom React hooks
│       │   ├── lib/       # Utility libraries
│       │   └── types/     # TypeScript types
│       └── package.json
└── package.json           # Root package.json for monorepo
```

## Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database access

## Setup Instructions

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install all workspace dependencies
npm install --workspaces
```

### 2. Database Configuration

1. Copy the environment file:
   ```bash
   cp packages/backend/.env.example packages/backend/.env
   ```

2. Update `packages/backend/.env` with your PostgreSQL connection details:
   ```env
   DATABASE_URL=postgresql://username:password@hostname:port/TCIInspections
   ```

### 3. Development

Start both frontend and backend in development mode:

```bash
npm run dev
```

Or start them individually:

```bash
# Backend only (API server on port 3001)
npm run dev:backend

# Frontend only (Web app on port 5173)
npm run dev:frontend
```

### 4. Building for Production

```bash
# Build both packages
npm run build

# Build individually
npm run build:backend
npm run build:frontend
```

## API Endpoints

The REST API will be available at `http://localhost:3001/api` with the following endpoints:

- `GET /health` - Health check endpoint
- `GET /api` - API status endpoint

Additional endpoints will be implemented in subsequent tasks.

## Database Schema

The system works with the existing PostgreSQL database tables:

- `inspections` - Main inspection records
- `inspimage` - Inspection photos and images
- `drivers` - Driver information
- `emailsettings` - Email distribution settings
- `monthlyinspection` - Monthly inspection records

## Development Scripts

### Root Level
- `npm run dev` - Start both frontend and backend
- `npm run build` - Build both packages
- `npm run test` - Run tests for both packages
- `npm run lint` - Lint both packages

### Backend (`packages/backend`)
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm run start` - Start production server
- `npm run test` - Run tests
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Drizzle Studio

### Frontend (`packages/frontend`)
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests

## Next Steps

1. Install Node.js and npm if not already available
2. Run `npm install` to install dependencies
3. Configure database connection in `packages/backend/.env`
4. Start development servers with `npm run dev`
5. Proceed with implementing the remaining tasks from the specification

## Requirements Addressed

This setup addresses the following requirements from the specification:

- **Requirement 3.1**: REST API as central data controller
- **Requirement 3.5**: PostgreSQL database connection setup

The project structure is now ready for implementing the remaining functionality as outlined in the task list.