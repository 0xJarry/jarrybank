# Coding Standards

## **Critical Fullstack Rules**

- **Type Sharing:** Always define types in packages/shared and import from there - prevents type drift between frontend/backend
- **API Calls:** Never make direct HTTP calls from components - use the service layer and React Query hooks for consistency
- **Environment Variables:** Access only through config objects, never process.env directly - enables proper validation and type safety
- **Error Handling:** All API routes must use the standard error format with success/error structure - ensures consistent client handling
- **State Updates:** Never mutate Zustand state directly - use actions to maintain predictable state changes
- **Wallet Address Format:** Always use `0x${string}` type for addresses - provides compile-time validation of address format
- **External API Calls:** Always implement fallback logic for external APIs - Moralis → CoinMarketCap → cached data
- **Cache TTL:** Respect cache TTL values: 30s for balances, 60s for prices - prevents excessive API calls

## **Naming Conventions**

| Element | Frontend | Backend | Example |
|---------|----------|---------|---------|
| **Components** | PascalCase | - | `TokenTable.tsx`, `WalletConnectButton.tsx` |
| **Hooks** | camelCase with 'use' | - | `useTokens.ts`, `useWalletConnection.ts` |
| **API Routes** | - | kebab-case | `/api/wallet-tokens`, `/api/price-batch` |
| **Database Tables** | - | snake_case | `wallet_balances`, `price_cache` |
| **Types/Interfaces** | PascalCase | PascalCase | `TokenBalance`, `WalletInfo` |
| **Constants** | SCREAMING_SNAKE_CASE | SCREAMING_SNAKE_CASE | `AVALANCHE_CHAIN_ID`, `API_BASE_URL` |
