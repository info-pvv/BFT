import LeadForm from '../components/LeadForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты — TERRAFORGE',
  description: 'Свяжитесь с нами для консультации или заказа вездехода',
};

export default function ContactsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        Контакты
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-6">
              Контактная информация
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500/20 p-3 rounded">
                  <svg
                    className="w-6 h-6 text-orange-500"
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
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Телефон</p>
                  <a
                    href="tel:+79991234567"
                    className="text-white text-lg hover:text-orange-500 transition-colors"
                  >
                    +7 (999) 123-45-67
                  </a>
                  <p className="text-zinc-400 text-sm">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500/20 p-3 rounded">
                  <svg
                    className="w-6 h-6 text-orange-500"
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
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Email</p>
                  <a
                    href="mailto:info@terraforge.ru"
                    className="text-white text-lg hover:text-orange-500 transition-colors"
                  >
                    info@terraforge.ru
                  </a>
                  <p className="text-zinc-400 text-sm">
                    Ответ в течение 24 часов
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500/20 p-3 rounded">
                  <svg
                    className="w-6 h-6 text-orange-500"
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
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Адрес</p>
                  <p className="text-white text-lg">
                    Москва, ул. Индустриальная, 42
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Шоу-рум: Сб-Вс по записи
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden h-64">
            <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-12 h-12 text-zinc-600 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <p className="text-zinc-500">Интерактивная карта</p>
                <p className="text-zinc-600 text-sm">
                  (интеграция с Яндекс.Картами или Google Maps)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Form */}
        <div>
          <LeadForm endpoint="https://formspree.io/f/YOUR_FORM_ID" />
        </div>
      </div>
    </div>
  );
}
