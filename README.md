# Cron Hit Service

This Next.js application is configured to run a scheduled cron job to perform health checks on the Unisocial User Service.

## Functionality

- **Target URL**: `https://unisocial-user-service.onrender.com/health`
- **Schedule**: Every 10 minutes (`*/10 * * * *`)
- **Method**: GET

## Infrastructure

The project uses [Vercel Cron Jobs](https://vercel.com/docs/base-cron) for scheduling.

### Configuration

- **`vercel.json`**: Defines the cron schedule.
  ```json
  {
    "crons": [
      {
        "path": "/api/cron/health-check",
        "schedule": "*/10 * * * *"
      }
    ]
  }
  ```

- **API Route**: `app/api/cron/health-check/route.ts`
  - Fetches the health endpoint.
  - Validates the JSON response (`{ "status": "healthy" }`).
  - Logs success or failure.

## Local Development

To run the health check locally:

1. Start the server:
   ```bash
   npm run dev
   ```

2. Visit the endpoint:
   `http://localhost:3000/api/cron/health-check`

## Deployment

Deploy to Vercel to activate the cron job. Vercel will automatically detect the `vercel.json` configuration.
