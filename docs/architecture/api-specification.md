# API Specification

## **Base URL**
```
Production: https://jarrybank.vercel.app/api
Development: http://localhost:3000/api
```

## **Authentication**
All API endpoints use **wallet-based authentication** via request headers:
- `x-wallet-address`: Connected wallet address
- `x-wallet-signature`: Signed message for verification

## **Core API Routes**

### **GET /api/wallet/[address]/tokens**
Fetch all token balances for a connected wallet

**Parameters:**
- `address` (path): Wallet address (`0x${string}`)

**Query Parameters:**
- `refresh?` (boolean): Force refresh from blockchain

**Response:**
```typescript
{
  "success": true,
  "data": {
    "walletAddress": "0x742d35...",
    "tokens": [
      {
        "address": "0x0000000000000000000000000000000000000000",
        "symbol": "AVAX",
        "name": "Avalanche",
        "decimals": 18,
        "balance": "2.5",
        "formattedBalance": "2.50",
        "logoURI": "https://...",
        "isNative": true,
        "priceUSD": 42.15,
        "valueUSD": 105.38,
        "change24h": -2.3
      }
    ],
    "totalValueUSD": 1250.75,
    "lastUpdated": "2025-01-10T10:30:00.000Z"
  }
}
```

### **GET /api/prices/batch**
Fetch current prices for multiple tokens

**Query Parameters:**
- `tokens` (string): Comma-separated token addresses
- `chainId?` (number): Blockchain network ID (default: 43114)

**Response:**
```typescript
{
  "success": true,
  "data": {
    "prices": {
      "0x0000000000000000000000000000000000000000": {
        "priceUSD": 42.15,
        "change24h": -2.3,
        "marketCap": 15800000000,
        "volume24h": 890000000,
        "source": "moralis",
        "lastUpdated": "2025-01-10T10:30:00.000Z"
      }
    },
    "lastUpdated": "2025-01-10T10:30:00.000Z"
  }
}
```

## **Error Handling**

All endpoints return consistent error responses:

```typescript
{
  "success": false,
  "error": {
    "code": "WALLET_NOT_FOUND",
    "message": "Wallet address not found or not connected",
    "details": {
      "address": "0x742d35...",
      "chainId": 43114
    },
    "timestamp": "2025-01-10T10:30:00.000Z",
    "requestId": "req_abc123"
  }
}
```

**Error Codes:**
- `WALLET_NOT_FOUND`: Wallet not connected or invalid
- `INVALID_TOKEN_ADDRESS`: Token address format invalid
- `PRICE_DATA_UNAVAILABLE`: Price APIs unavailable
- `RATE_LIMIT_EXCEEDED`: API rate limit hit
- `BLOCKCHAIN_ERROR`: RPC provider error
- `VALIDATION_ERROR`: Request validation failed
