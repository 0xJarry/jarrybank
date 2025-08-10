# Frontend Architecture

## **Component Architecture**

**Component Organization:**
```
apps/web/src/
├── components/           # UI components
│   ├── ui/              # shadcn/ui base components  
│   ├── wallet/          # Wallet-specific components
│   ├── tokens/          # Token display components
│   └── layout/          # Layout and navigation
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and configurations
├── stores/              # Zustand state management
└── styles/              # Global styles and themes
```

**Component Template (TokenTable):**
```typescript
import { useTokens } from '@/hooks/useTokens';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface TokenTableProps {
  walletAddress: `0x${string}`;
  refreshTrigger?: number;
}

export function TokenTable({ walletAddress, refreshTrigger }: TokenTableProps) {
  const { tokens, isLoading, error, refetch } = useTokens(walletAddress, refreshTrigger);
  
  if (isLoading) return <TokenTableSkeleton />;
  if (error) return <ErrorDisplay error={error} onRetry={refetch} />;
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Token</TableHead>
          <TableHead>Balance</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>24h Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tokens.map((token) => (
          <TokenRow key={token.address} token={token} />
        ))}
      </TableBody>
    </Table>
  );
}
```

## **State Management Architecture**

**State Structure (Zustand):**
```typescript
interface WalletState {
  // Wallet connection state
  address: `0x${string}` | null;
  isConnected: boolean;
  chainId: number;
  connector?: string;
  
  // Actions
  setWallet: (wallet: WalletInfo) => void;
  disconnect: () => void;
}

interface TokenState {
  // Token data cache
  tokensByWallet: Record<string, TokenBalance[]>;
  prices: Record<string, TokenPrice>;
  lastUpdated: Record<string, number>;
  
  // Actions  
  setTokens: (walletAddress: string, tokens: TokenBalance[]) => void;
  updatePrices: (prices: Record<string, TokenPrice>) => void;
  clearWalletTokens: (walletAddress: string) => void;
}
```

## **Routing Architecture**  

**Route Organization (Next.js App Router):**
```
apps/web/src/app/
├── page.tsx                 # Home page with wallet connection
├── dashboard/               # Main app dashboard
│   ├── page.tsx            # Token table and portfolio summary
│   └── loading.tsx         # Loading UI for dashboard
├── api/                    # API routes
│   ├── wallet/[address]/   
│   │   ├── tokens/route.ts # Token balance API
│   │   └── portfolio/route.ts # Portfolio summary API
│   └── prices/
│       ├── batch/route.ts  # Batch price fetching
│       └── [token]/route.ts # Individual token price
├── layout.tsx              # Root layout with providers
└── globals.css            # Global styles with custom variables
```

## **Frontend Services Layer**

**API Client Setup:**
```typescript
// lib/api-client.ts
class APIClient {
  private baseURL = process.env.NEXT_PUBLIC_API_URL || '/api';
  
  async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-wallet-address': this.walletAddress || '',
        ...options?.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new APIError(response.status, await response.text());
    }
    
    return response.json();
  }
  
  // Wallet-specific methods
  getTokens(address: string, refresh?: boolean) {
    const params = refresh ? '?refresh=true' : '';
    return this.request<TokenResponse>(`/wallet/${address}/tokens${params}`);
  }
  
  getBatchPrices(tokenAddresses: string[], chainId?: number) {
    const params = new URLSearchParams({
      tokens: tokenAddresses.join(','),
      ...(chainId && { chainId: chainId.toString() }),
    });
    return this.request<PriceResponse>(`/prices/batch?${params}`);
  }
}
```
