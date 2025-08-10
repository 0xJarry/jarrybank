# Backend Architecture

## **Serverless Architecture (Next.js API Routes on Vercel)**

**Function Template (Token Balance Service):**
```typescript
// app/api/wallet/[address]/tokens/route.ts
import { NextRequest } from 'next/server';
import { WalletService } from '@/lib/services/wallet';
import { PriceService } from '@/lib/services/price';
import { validateWalletAddress } from '@/lib/utils/validation';

export async function GET(
  request: NextRequest,
  { params }: { params: { address: string } }
) {
  try {
    const { address } = params;
    const refresh = request.nextUrl.searchParams.get('refresh') === 'true';
    
    // Validate wallet address format
    if (!validateWalletAddress(address)) {
      return Response.json({
        success: false,
        error: { code: 'INVALID_ADDRESS', message: 'Invalid wallet address format' }
      }, { status: 400 });
    }

    // Get token balances (with caching unless refresh=true)
    const walletService = new WalletService();
    const priceService = new PriceService();
    
    const tokens = await walletService.getTokenBalances(address as `0x${string}`, refresh);
    const prices = await priceService.getBatchPrices(
      tokens.map(t => t.tokenAddress),
      43114 // Avalanche
    );
    
    // Merge balance and price data
    const enrichedTokens = tokens.map(token => ({
      ...token,
      priceUSD: prices[token.tokenAddress]?.priceUSD || 0,
      valueUSD: parseFloat(token.formattedBalance) * (prices[token.tokenAddress]?.priceUSD || 0),
      change24h: prices[token.tokenAddress]?.change24h || 0
    }));

    const response = {
      success: true,
      data: {
        walletAddress: address,
        tokens: enrichedTokens,
        totalValueUSD: enrichedTokens.reduce((sum, token) => sum + token.valueUSD, 0),
        lastUpdated: new Date().toISOString()
      }
    };

    return Response.json(response, {
      headers: {
        'Cache-Control': refresh ? 'no-cache' : 's-maxage=30, stale-while-revalidate=60'
      }
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      }
    }, { status: 500 });
  }
}
```
