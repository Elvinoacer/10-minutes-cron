# Cron Hit Service

This repository is configured to run a scheduled cron job via **GitHub Actions** to perform health checks on the Unisocial User Service.

## Functionality

- **Target URLs**:
  - `https://unisocial-user-service.onrender.com/health`
  - `https://unisocial-gateway.onrender.com/health`
- **Schedule**: Every 10 minutes (`*/10 * * * *`)
- **Method**: GET (via `curl` in parallel)

## Infrastructure

The project uses [GitHub Actions](https://docs.github.com/en/actions) for scheduling.

### Configuration

- **Workflow File**: `.github/workflows/health-check.yml`
  - Runs on `ubuntu-latest`.
  - Executes `curl -v` to hit the health endpoint.

## Local Development

Since the cron job is handled by GitHub Actions and simply runs a `curl` command, there is no local server requirement for the cron itself.

To manually test the health check:
```bash
curl -v https://unisocial-user-service.onrender.com/health
```

## Deployment

Pushing the `.github/workflows/health-check.yml` file to the default branch on GitHub will automatically enable the scheduled workflow.
