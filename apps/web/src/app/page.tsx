import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Home - JarryBank | Track Your Avalanche Portfolio',
  description: 'Connect your wallet to monitor all your Avalanche tokens in one place. Real-time price tracking, portfolio analytics, and seamless wallet integration for the modern DeFi investor.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main id="main" className="flex-grow">
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  JarryBank
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
                Track Your Avalanche Portfolio in Real-Time
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                Connect your wallet to monitor all your Avalanche tokens in one place. 
                Real-time price tracking, portfolio analytics, and seamless wallet integration 
                for the modern DeFi investor.
              </p>
              
              <button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold 
                         py-4 px-8 rounded-full text-lg hover:shadow-lg transform hover:scale-105 
                         transition-all duration-200 cursor-not-allowed opacity-75"
                disabled
                aria-disabled="true"
                aria-describedby="connect-wallet-help"
              >
                Connect Wallet
              </button>
              <div id="connect-wallet-help" className="sr-only">
                Connect wallet feature coming in Story 1.3
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                Secure • Fast • Transparent
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Choose JarryBank?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">Real-Time Prices</h4>
                <p className="text-gray-600">
                  Get instant updates on all your Avalanche token prices with live market data 
                  from multiple trusted sources.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">Multi-Token Support</h4>
                <p className="text-gray-600">
                  Track all your Avalanche C-Chain tokens including AVAX, USDC, USDT, and 
                  hundreds of other supported tokens.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">Secure Connection</h4>
                <p className="text-gray-600">
                  Your private keys never leave your wallet. We use read-only connections 
                  to ensure maximum security.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}