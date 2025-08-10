# Components

## **Web Application Layer (`apps/web/`)**

### **WalletConnection Component**
**Responsibility:** Handle wallet connection, disconnection, and account switching using RainbowKit

**Key Interfaces:**
- `useAccount()` - Get current wallet state
- `useConnect()` - Connect wallet functionality
- `useDisconnect()` - Disconnect wallet functionality

**Dependencies:** RainbowKit, Wagmi, Viem

**Technology Stack:** React + TypeScript + RainbowKit + Wagmi hooks

### **TokenTable Component** 
**Responsibility:** Display wallet's token balances in a sortable, filterable table

**Key Interfaces:**
- `TokenTableProps` - Receives token data and loading states
- `onRefresh()` - Trigger balance refresh
- `onSort()` - Handle column sorting

**Dependencies:** Token Balance API, Price API, shadcn/ui Table components

**Technology Stack:** React + TypeScript + shadcn/ui + TanStack Table

### **PortfolioSummary Component**
**Responsibility:** Show aggregated portfolio value, change indicators, and key metrics

**Key Interfaces:**
- `PortfolioSummaryProps` - Portfolio data and update timestamps
- `formatCurrency()` - Currency formatting utilities
- `formatPercentage()` - Percentage change formatting

**Dependencies:** Portfolio API, Token Price API

**Technology Stack:** React + TypeScript + shadcn/ui Cards + Custom hooks

### **PriceProvider Component**
**Responsibility:** Real-time price updates and caching using React Query

**Key Interfaces:**
- `usePrices()` - Hook for accessing cached price data
- `useTokenPrice()` - Hook for individual token prices
- `invalidatePrice()` - Force price refresh

**Dependencies:** TanStack Query, API Layer

**Technology Stack:** React Query + Custom hooks + TypeScript

## **API Layer (`apps/api/` or Next.js API Routes)**

### **WalletService**
**Responsibility:** Manage wallet operations and blockchain interactions

**Key Interfaces:**
- `getTokenBalances(address, chainId)` - Fetch wallet token balances
- `getWalletInfo(address)` - Get wallet metadata and connection status
- `validateWalletAddress(address)` - Address validation

**Dependencies:** Viem clients, RPC providers (Alchemy/Infura)

**Technology Stack:** Next.js API Routes + Viem + TypeScript

### **PriceService**  
**Responsibility:** Aggregate price data from multiple sources with fallback logic

**Key Interfaces:**
- `getBatchPrices(tokenAddresses)` - Fetch multiple token prices
- `getTokenPrice(tokenAddress, chainId)` - Get single token price
- `getPriceHistory(tokenAddress, timeframe)` - Historical price data

**Dependencies:** Moralis API, CoinMarketCap API, Redis cache (future)

**Technology Stack:** Next.js API Routes + External API clients + TypeScript

### **CacheService**
**Responsibility:** Implement caching layer for API responses and external data

**Key Interfaces:**
- `get(key)` - Retrieve cached data
- `set(key, value, ttl)` - Cache data with TTL
- `invalidate(pattern)` - Clear cache by pattern

**Dependencies:** Vercel Edge Cache, Memory cache fallback

**Technology Stack:** Vercel Edge Runtime + Custom caching logic
