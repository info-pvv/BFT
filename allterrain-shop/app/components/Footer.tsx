import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-orange-500 tracking-wider mb-4">
              TERRA<span className="text-white">FORGE</span>
            </div>
            <p className="text-zinc-400 max-w-md">
              Производство вездеходов для экстремальных условий. 
              Надежность, проверенная в самых суровых испытаниях.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/catalog"
                  className="text-zinc-400 hover:text-orange-500 transition-colors"
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-400 hover:text-orange-500 transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-zinc-400 hover:text-orange-500 transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@terraforge.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Москва, ул. Индустриальная, 42</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500">
          <p>&copy; 2026 TERRAFORGE. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
