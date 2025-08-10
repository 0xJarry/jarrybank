# Database Schema

**Initial Implementation: No Traditional Database Required**

JarryBank starts with a **stateless architecture** leveraging external APIs and blockchain data sources. No persistent database is required for the initial version:

**Data Sources:**
- **Blockchain State**: Token balances via Avalanche RPC (Alchemy/Infura)  
- **Token Metadata**: Moralis API provides names, symbols, logos
- **Price Data**: Moralis + CoinMarketCap APIs for real-time pricing
- **User Sessions**: Wallet-based auth, no user accounts to store

**Caching Layer (Vercel Edge Cache):**
```typescript
// Cache structure (in-memory/Redis future)
interface CacheData {
  key: string;           // "wallet:0x123:tokens" 
  data: any;            // Cached response data
  expiry: number;       // Unix timestamp
  source: string;       // "moralis" | "cmc" | "alchemy"
}
```

**Future Database Migration Path:**
When persistence becomes necessary, the architecture supports adding:
- **PostgreSQL**: User preferences, custom token lists
- **Redis**: Enhanced caching and session management  
- **Analytics Database**: Usage metrics and performance data
