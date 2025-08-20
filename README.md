# Visitor Management App

A React application built with Vite for managing visitor registrations and check-ins.

## Environment Setup

This application uses environment variables for configuration. Follow these steps to set up your environment:

1. Copy the `.env.example` file to create a new `.env` file:
   ```
   cp .env.example .env
   ```

2. Edit the `.env` file to configure your environment variables:
   ```
   # API Configuration
   VITE_API_BASE_URL=https://your-api-server.com
   
   # Application Settings
   VITE_APP_NAME="Visitor Management App"
   VITE_APP_ENVIRONMENT=production
   ```

3. For development, you can use:
   ```
   VITE_API_BASE_URL=http://localhost:8000
   VITE_APP_ENVIRONMENT=development
   ```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
