import Link from 'next/link';
import { ExternalLink, Twitter, MessageCircle } from 'lucide-react';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps = {}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-900 text-white mt-auto ${className || ''}`} role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                JarryBank
              </span>
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted Avalanche portfolio tracker. Monitor your tokens, 
              track prices, and manage your DeFi investments all in one place.
            </p>
            <p className="text-sm text-gray-500">
              © {currentYear} JarryBank. All rights reserved.
            </p>
          </div>

          <nav aria-label="Quick navigation" role="navigation">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal information" role="navigation">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  aria-label="View JarryBank on GitHub (opens in new tab)"
                >
                  GitHub
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              Built with Next.js and Tailwind CSS
            </p>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow JarryBank on Twitter (opens in new tab)"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Join JarryBank Discord community (opens in new tab)"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}