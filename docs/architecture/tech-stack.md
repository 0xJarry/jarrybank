# Tech Stack

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| **Frontend Language** | TypeScript | ^5.6.0 | Type-safe JavaScript development | Strong typing for Web3 development, better developer experience |
| **Frontend Framework** | Next.js | ^15.1.0 | React meta-framework with App Router | Optimal for Vercel deployment, built-in API routes, server components |
| **UI Component Library** | shadcn/ui | latest | Copy-paste component system | Modern design system, perfect integration with your color palette |
| **CSS Framework** | Tailwind CSS | ^4.0.0 | Utility-first CSS framework | Latest v4 with better performance, native CSS support |
| **State Management** | Zustand | ^5.0.2 | Lightweight state management | Simple global state for wallet/token data |
| **Backend Language** | TypeScript | ^5.6.0 | Server-side type safety | Shared types between frontend/backend |
| **Backend Framework** | Next.js API Routes | ^15.1.0 | Serverless backend functions | Integrated with frontend, optimal Vercel deployment |
| **API Style** | REST API | Next.js | Simple HTTP endpoints | Perfect for price aggregation APIs |
| **Database** | None (Initial) | N/A | External APIs only | Start simple, add persistence later |
| **Cache** | Vercel Edge Cache | Built-in | Response caching | Automatic caching for price data |
| **File Storage** | None (Initial) | N/A | No file storage needed | Pure data application |
| **Web3 Library** | Wagmi | ^2.12.0 | React hooks for Ethereum | Industry standard for Web3 React apps |
| **Web3 Core** | Viem | ^2.21.0 | TypeScript Ethereum library | Modern replacement for ethers, required by Wagmi |
| **Wallet Connection** | RainbowKit | ^2.2.0 | Wallet connection UI | Beautiful wallet UX, integrates with Wagmi |
| **Blockchain** | Avalanche C-Chain | Mainnet | Primary blockchain network | As specified in requirements |
| **RPC Providers** | Alchemy & Infura | Latest APIs | Blockchain connectivity | Redundancy and reliability |
| **Price APIs** | Moralis & CoinMarketCap | Latest APIs | Token price data | Dual sources for reliability |
| **Authentication** | Wallet-based | Wagmi/RainbowKit | Web3 wallet authentication | Native Web3 auth, no traditional auth needed |
| **Frontend Testing** | Vitest | ^2.1.0 | Fast testing framework | Native Next.js support, faster than Jest |
| **Backend Testing** | Vitest | ^2.1.0 | API endpoint testing | Consistent testing across stack |
| **E2E Testing** | Playwright | ^1.48.0 | End-to-end browser testing | Best for Web3 wallet interactions |
| **Build Tool** | Turbo | ^2.3.0 | Monorepo build system | Optimal caching and parallel builds |
| **Package Manager** | pnpm | ^9.0.0 | Fast package management | Efficient for monorepos |
| **Monorepo Tool** | Turborepo | ^2.3.0 | Monorepo orchestration | Perfect Vercel integration |
| **CI/CD** | GitHub Actions | Latest | Automated deployments | As specified, controls all deployments |
| **Deployment** | Vercel | Latest | Edge deployment platform | As specified, optimal for Next.js |
| **Monitoring** | Vercel Analytics | Built-in | Performance monitoring | Integrated monitoring solution |
| **Logging** | Vercel Functions Logs | Built-in | Serverless function logging | Built-in logging for API routes |
