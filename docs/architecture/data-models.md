# Data Models

## **Wallet**
**Purpose:** Represents a connected Web3 wallet and its metadata

**Key Attributes:**
- `address`: string - Ethereum wallet address (42-character hex string)
- `chainId`: number - Connected blockchain network ID (43114 for Avalanche)
- `isConnected`: boolean - Connection status
- `connector`: string - Wallet type (MetaMask, WalletConnect, etc.)
- `ensName`: string | null - ENS domain name if available

### TypeScript Interface
```typescript
interface Wallet {
  address: `0x${string}`;
  chainId: number;
  isConnected: boolean;
  connector?: string;
  ensName?: string | null;
}
```

### Relationships
- One-to-many with Token holdings
- Primary identifier for all user-specific data

## **Token**
**Purpose:** Represents a cryptocurrency token with metadata and price information

**Key Attributes:**
- `address`: string - Token contract address
- `symbol`: string - Token ticker symbol (e.g., AVAX, USDC)
- `name`: string - Full token name
- `decimals`: number - Token decimal places
- `logoURI`: string | null - Token logo image URL
- `chainId`: number - Blockchain network ID
- `isNative`: boolean - Whether it's the native chain token

### TypeScript Interface
```typescript
interface Token {
  address: `0x${string}`;
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string | null;
  chainId: number;
  isNative: boolean;
}
```

### Relationships
- One-to-many with TokenBalance
- One-to-many with TokenPrice

## **TokenBalance**
**Purpose:** Represents the quantity of tokens held in a specific wallet

**Key Attributes:**
- `walletAddress`: string - Owner wallet address
- `tokenAddress`: string - Token contract address
- `balance`: string - Raw balance (as string to handle large numbers)
- `formattedBalance`: string - Human-readable balance
- `lastUpdated`: Date - When balance was last fetched

### TypeScript Interface
```typescript
interface TokenBalance {
  walletAddress: `0x${string}`;
  tokenAddress: `0x${string}`;
  balance: string;
  formattedBalance: string;
  lastUpdated: Date;
}
```

### Relationships
- Belongs to one Wallet
- Belongs to one Token
- One-to-one with current TokenPrice for value calculation

## **TokenPrice**
**Purpose:** Real-time and cached price data from external APIs

**Key Attributes:**
- `tokenAddress`: string - Token contract address
- `priceUSD`: number - Current price in USD
- `change24h`: number - 24-hour price change percentage
- `marketCap`: number | null - Market capitalization
- `volume24h`: number | null - 24-hour trading volume
- `source`: 'moralis' | 'coinmarketcap' - Data source
- `lastUpdated`: Date - Price fetch timestamp
- `chainId`: number - Blockchain network

### TypeScript Interface
```typescript
interface TokenPrice {
  tokenAddress: `0x${string}`;
  priceUSD: number;
  change24h: number;
  marketCap?: number | null;
  volume24h?: number | null;
  source: 'moralis' | 'coinmarketcap';
  lastUpdated: Date;
  chainId: number;
}
```

### Relationships
- Belongs to one Token
- Used to calculate TokenBalance USD values

## **PortfolioSummary** (Computed)
**Purpose:** Aggregated wallet portfolio data for display

**Key Attributes:**
- `walletAddress`: string - Wallet identifier
- `totalValueUSD`: number - Total portfolio value
- `tokenCount`: number - Number of different tokens
- `lastUpdated`: Date - Last calculation time
- `change24hPercent`: number - Portfolio 24h change
- `change24hUSD`: number - Portfolio 24h change in USD

### TypeScript Interface
```typescript
interface PortfolioSummary {
  walletAddress: `0x${string}`;
  totalValueUSD: number;
  tokenCount: number;
  lastUpdated: Date;
  change24hPercent: number;
  change24hUSD: number;
}
```

### Relationships
- Computed from TokenBalance and TokenPrice data
- One per connected wallet
