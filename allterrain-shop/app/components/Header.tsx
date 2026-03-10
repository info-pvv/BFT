'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl md:text-2xl font-bold text-[#ff6b35] tracking-wider">
              БО<span className="text-white">РЕЙ</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center nav-gap">
            <Link
              href="/catalog"
              className="text-slate-300 hover:text-[#ff6b35] transition-colors font-medium whitespace-nowrap"
            >
              Каталог
            </Link>
            <Link
              href="/about"
              className="text-slate-300 hover:text-[#ff6b35] transition-colors font-medium whitespace-nowrap"
            >
              О нас
            </Link>
            <Link
              href="/contacts"
              className="text-slate-300 hover:text-[#ff6b35] transition-colors font-medium whitespace-nowrap"
            >
              Контакты
            </Link>
          </nav>

          {/* Phone and CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="tel:+79218209245"
              className="text-white font-semibold hover:text-[#ff6b35] transition-colors whitespace-nowrap"
            >
              +7 (921) 820-92-45
            </a>
            <Link
              href="/contacts"
              className="bg-[#ff6b35] hover:bg-[#e55a28] !text-white font-semibold py-2 px-4 rounded-lg transition-colors whitespace-nowrap"
            >
              Заказать звонок
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/catalog"
                className="text-slate-300 hover:text-[#ff6b35] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Каталог
              </Link>
              <Link
                href="/about"
                className="text-slate-300 hover:text-[#ff6b35] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                О нас
              </Link>
              <Link
                href="/contacts"
                className="text-slate-300 hover:text-[#ff6b35] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </Link>
              <a
                href="tel:+79218209245"
                className="text-white font-semibold hover:text-[#ff6b35] transition-colors py-2"
              >
                +7 (921) 820-92-45
              </a>
              <Link
                href="/contacts"
                className="bg-[#ff6b35] hover:bg-[#e55a28] !text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Заказать звонок
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
