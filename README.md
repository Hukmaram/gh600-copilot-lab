# GitHub Copilot Lab

A minimal TypeScript application designed as a lab environment for GitHub Copilot customization and agent development.

## Project Structure

```
.
├── src/
│   ├── frontend/        # Frontend-related modules
│   │   └── app.ts       # UI components and app initialization
│   ├── backend/         # Backend-related modules
│   │   └── server.ts    # Server request handling
│   └── shared/          # Shared utilities
│       └── utils.ts     # Common utility functions
├── tests/
│   └── backend/
│       └── server.test.ts  # Backend server tests
├── dist/                # Compiled output (generated)
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── jest.config.js       # Jest test configuration
└── README.md            # This file
```

## Setup

```bash
# Install dependencies
npm install
```

## Build

```bash
# Compile TypeScript to JavaScript
npm run build

# Watch mode (auto-recompile on changes)
npm run dev
```

## Test

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Architecture

This lab is organized into three main areas:

- **Frontend** (`src/frontend/`): UI components and application initialization
- **Backend** (`src/backend/`): Request handling and server logic
- **Shared** (`src/shared/`): Common utilities used across frontend and backend

Each module is intentionally simple to serve as a foundation for Copilot customization and experimentation.
