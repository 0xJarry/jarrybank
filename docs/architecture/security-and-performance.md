# Security and Performance

## **Security Requirements**

**Frontend Security:**
- **CSP Headers:** `default-src 'self'; connect-src 'self' https://*.moralis.io https://*.coinmarketcap.com https://*.alchemy.com https://*.infura.io; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'`
- **XSS Prevention:** All user inputs sanitized, shadcn/ui components escape by default, strict TypeScript typing prevents injection
- **Secure Storage:** Wallet private keys never stored, session data in memory only, sensitive data encrypted in localStorage

**Backend Security:**
- **Input Validation:** Zod schemas validate all API inputs, wallet addresses verified with checksum validation
- **Rate Limiting:** 100 requests/minute per IP, 300 requests/minute per authenticated wallet, progressive backoff for abuse
- **CORS Policy:** `https://jarrybank.vercel.app` and `localhost:3000` for development, no wildcards in production

**Authentication Security:**
- **Token Storage:** No traditional tokens, wallet signatures provide authentication, signatures expire after 5 minutes
- **Session Management:** Stateless authentication, each request independently verified, no server-side session storage  
- **Password Policy:** N/A - Wallet-based authentication only, users manage their own wallet security

## **Performance Optimization**

**Frontend Performance:**
- **Bundle Size Target:** < 500KB initial bundle, < 1MB total JavaScript, code splitting by route and component
- **Loading Strategy:** Incremental Static Regeneration for static content, lazy loading for components, prefetch critical routes
- **Caching Strategy:** React Query with 30s stale time, Vercel Edge caching for API responses, aggressive browser caching for assets

**Backend Performance:**
- **Response Time Target:** < 200ms for cached data, < 2s for fresh blockchain queries, < 500ms for price data
- **Database Optimization:** Proper indexing on wallet addresses and timestamps, connection pooling, query optimization
- **Caching Strategy:** Vercel Edge cache for API responses, Redis for session data (future), CDN for static assets
