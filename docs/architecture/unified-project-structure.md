# Unified Project Structure

```
jarrybank/
├── .github/                          # CI/CD workflows
│   └── workflows/
│       ├── ci.yaml                   # Test and lint on PR/push
│       ├── deploy-web.yaml           # Deploy web app to Vercel
│       └── deploy-api.yaml           # Deploy API functions (if separate)
├── apps/                             # Application packages
│   ├── web/                          # Frontend Next.js application
│   │   ├── src/
│   │   │   ├── app/                  # Next.js App Router
│   │   │   │   ├── (auth)/           # Route groups
│   │   │   │   │   └── dashboard/    # Protected dashboard routes
│   │   │   │   ├── api/              # API routes (serverless functions)
│   │   │   │   │   ├── wallet/[address]/
│   │   │   │   │   │   ├── tokens/route.ts
│   │   │   │   │   │   └── portfolio/route.ts
│   │   │   │   │   ├── prices/
│   │   │   │   │   │   ├── batch/route.ts
│   │   │   │   │   │   └── [token]/route.ts
│   │   │   │   │   └── health/route.ts
│   │   │   │   ├── globals.css       # Global styles with custom variables
│   │   │   │   ├── layout.tsx        # Root layout with providers
│   │   │   │   ├── page.tsx          # Landing page
│   │   │   │   └── loading.tsx       # Global loading UI
│   │   │   ├── components/           # UI components
│   │   │   │   ├── ui/               # shadcn/ui components
│   │   │   │   ├── wallet/           # Wallet connection components
│   │   │   │   ├── tokens/           # Token display components
│   │   │   │   └── layout/           # Layout components
│   │   │   ├── hooks/                # Custom React hooks
│   │   │   ├── lib/                  # Utilities and configurations
│   │   │   ├── stores/               # Zustand state management
│   │   │   └── styles/               # Additional styles
│   │   ├── public/                   # Static assets
│   │   ├── tests/                    # Frontend tests
│   │   ├── .env.local.example        # Environment variables template
│   │   ├── next.config.js            # Next.js configuration
│   │   ├── tailwind.config.ts        # Tailwind configuration
│   │   ├── components.json           # shadcn/ui configuration
│   │   ├── tsconfig.json             # TypeScript configuration
│   │   └── package.json              # Web app dependencies
├── packages/                         # Shared packages
│   ├── shared/                       # Shared types and utilities
│   │   ├── src/
│   │   │   ├── types/                # TypeScript interfaces
│   │   │   ├── constants/            # Shared constants
│   │   │   ├── utils/                # Shared utilities
│   │   │   └── index.ts              # Package exports
│   │   ├── tsconfig.json             # Package TypeScript config
│   │   └── package.json              # Shared package dependencies
│   ├── ui/                           # Shared UI components
│   │   ├── src/
│   │   │   ├── components/           # shadcn/ui customized components
│   │   │   ├── styles/               # Component styles
│   │   │   ├── lib/                  # UI utilities
│   │   │   └── index.ts              # Package exports
│   │   ├── tailwind.config.ts        # UI package Tailwind config
│   │   ├── tsconfig.json
│   │   └── package.json
│   ├── web3/                         # Web3-specific utilities
│   │   ├── src/
│   │   │   ├── config/               # Web3 configurations
│   │   │   ├── utils/                # Web3 utilities
│   │   │   ├── hooks/                # Web3-specific hooks
│   │   │   └── index.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   └── config/                       # Shared configuration
│       ├── eslint/                   # ESLint configurations
│       ├── typescript/               # TypeScript configurations
│       └── jest/                     # Jest test configurations
├── scripts/                          # Build and deployment scripts
├── docs/                             # Project documentation
│   ├── architecture.md               # This architecture document
│   ├── SETUP.md                      # Development setup guide
│   ├── DEPLOYMENT.md                 # Deployment instructions
│   └── API.md                        # API documentation
├── .env.example                      # Global environment template
├── .gitignore                        # Git ignore rules
├── package.json                      # Root package.json with workspace config
├── pnpm-workspace.yaml               # pnpm workspace configuration
├── turbo.json                        # Turborepo configuration
├── README.md                         # Project overview and setup
└── CLAUDE.md                         # AI development context file
```
