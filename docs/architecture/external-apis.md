# External APIs

## **Moralis Web3 API**
- **Purpose:** Primary source for token metadata, balances, and price data
- **Documentation:** https://docs.moralis.com/web3-data-api/evm
- **Base URL(s):** https://deep-index.moralis.io/api/v2.2
- **Authentication:** API Key in `X-API-Key` header
- **Rate Limits:** 25 requests/second (paid tiers available)

**Key Endpoints Used:**
- `GET /{address}/erc20` - Get ERC-20 token balances for wallet
- `GET /erc20/{address}/price` - Get current token price
- `GET /erc20/metadata` - Get token metadata (name, symbol, decimals, logo)

**Integration Notes:** Primary API due to comprehensive Avalanche support and real-time price updates. Includes built-in caching and batch request capabilities.

## **CoinMarketCap API**
- **Purpose:** Secondary price data source with market metrics and fallback pricing
- **Documentation:** https://coinmarketcap.com/api/documentation/v1/
- **Base URL(s):** https://pro-api.coinmarketcap.com/v2
- **Authentication:** API Key in `X-CMC_PRO_API_KEY` header  
- **Rate Limits:** 333 calls/day (Basic plan), 10,000 calls/month (paid plans)

**Key Endpoints Used:**
- `GET /cryptocurrency/quotes/latest` - Current price quotes for tokens
- `GET /cryptocurrency/info` - Token metadata and descriptions
- `GET /tools/price-conversion` - Convert between token prices

**Integration Notes:** Used as backup when Moralis is unavailable or for tokens not covered by Moralis. Provides market cap and volume data not available from other sources.

## **Alchemy RPC Provider**  
- **Purpose:** Primary Avalanche blockchain RPC access
- **Documentation:** https://docs.alchemy.com/reference/avalanche-api-quickstart
- **Base URL(s):** https://avax-mainnet.g.alchemy.com/v2/{API_KEY}
- **Authentication:** API Key in URL path
- **Rate Limits:** 300 requests/second (Growth plan)

**Key Endpoints Used:**
- `eth_getBalance` - Get native AVAX balance
- `eth_call` - Call contract methods (token balances)
- `eth_blockNumber` - Get current block number

**Integration Notes:** Primary RPC for direct blockchain queries. Provides higher reliability than public RPCs and includes enhanced APIs for token data.

## **Infura RPC Provider**
- **Purpose:** Backup Avalanche blockchain RPC access  
- **Documentation:** https://docs.infura.io/api/networks/avalanche-c-chain
- **Base URL(s):** https://avalanche-mainnet.infura.io/v3/{PROJECT_ID}
- **Authentication:** Project ID in URL path
- **Rate Limits:** 100,000 requests/day (Core plan)

**Key Endpoints Used:**
- `eth_getBalance` - Get native AVAX balance (backup)
- `eth_call` - Contract calls (backup)
- `net_version` - Network verification

**Integration Notes:** Fallback RPC provider when Alchemy is unavailable. Ensures high availability for blockchain data access.
