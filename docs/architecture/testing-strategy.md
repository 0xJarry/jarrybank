# Testing Strategy

## **Testing Pyramid**
```
                E2E Tests (Playwright)
               /                    \
        Integration Tests (Vitest + MSW)
           /                            \
    Frontend Unit (Vitest + Testing Library)  Backend Unit (Vitest + Supertest)
```

## **Test Organization**

**Frontend Tests:**
```
apps/web/tests/
├── __mocks__/                    # Shared test mocks
├── components/                   # Component tests
├── hooks/                       # Custom hook tests
├── utils/                       # Utility function tests
└── setup.ts                    # Test environment setup
```

**Backend Tests:**
```
apps/web/tests/api/
├── wallet/                      # API route tests
├── prices/                     # Price API tests
├── services/                   # Service layer tests
└── mocks/                      # API mocks
```

**E2E Tests:**
```
tests/e2e/
├── wallet-connection.spec.ts    # Wallet connection flow
├── token-viewing.spec.ts        # Token balance display
├── price-updates.spec.ts        # Real-time price updates
├── error-handling.spec.ts       # Error state handling
└── performance.spec.ts          # Core Web Vitals
```
