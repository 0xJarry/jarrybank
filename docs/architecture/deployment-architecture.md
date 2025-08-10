# Deployment Architecture

## **Deployment Strategy**

**Frontend Deployment:**
- **Platform:** Vercel (automatic deployment)
- **Build Command:** `pnpm build --filter=web`
- **Output Directory:** `apps/web/.next`
- **CDN/Edge:** Vercel Edge Network (global)

**Backend Deployment:**
- **Platform:** Vercel Serverless Functions (same deployment)
- **Build Command:** Included in frontend build
- **Deployment Method:** Next.js API routes → Vercel Functions

## **CI/CD Pipeline**

**GitHub Actions Workflow (.github/workflows/ci.yaml):**
```yaml
name: CI/CD Pipeline
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Type check
        run: pnpm type-check
      
      - name: Lint
        run: pnpm lint
      
      - name: Test
        run: pnpm test
      
      - name: Build
        run: pnpm build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
          vercel-args: '--prod'
          working-directory: apps/web
```

## **Environments**

| Environment | Frontend URL | Backend URL | Purpose |
|-------------|-------------|-------------|----------|
| Development | http://localhost:3000 | http://localhost:3000/api | Local development |
| Preview | https://jarrybank-git-feature-*.vercel.app | Same domain/api | Feature branch testing |
| Production | https://jarrybank.vercel.app | https://jarrybank.vercel.app/api | Live environment |
