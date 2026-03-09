import LeadForm from '../components/LeadForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты — Купить вездеход Борей | TERRAFORGE',
  description: 'Свяжитесь с нами для консультации или заказа вездехода Борей. Телефон: +7 (921) 820-92-45, адрес: Вологда, ул. Индустриальная, 42',
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
                <div className="bg-[#2d5a4a]/20 p-3 rounded">
                  <svg
                    className="w-6 h-6 text-[#ff6b35]"
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
                    href="tel:+79218209245"
                    className="text-white text-lg hover:text-[#ff6b35] transition-colors"
                  >
                    +7 (921) 820-92-45
                  </a>
                  <p className="text-zinc-400 text-sm">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#2d5a4a]/20 p-3 rounded">
                  <svg
                    className="w-6 h-6 text-[#ff6b35]"
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
                    className="text-white text-lg hover:text-[#ff6b35] transition-colors"
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
                <div className="bg-[#2d5a4a]/20 p-3 rounded">
                  <svg
                    className="w-6 h-6 text-[#ff6b35]"
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
                    Вологда, ул. Индустриальная, 42
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Шоу-рум: Сб-Вс по записи
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#2d5a4a]/20 p-3 rounded">
                  <svg
                    className="w-6 h-6 text-[#ff6b35]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Режим работы</p>
                  <p className="text-white">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-zinc-400 text-sm">Сб-Вс: по записи</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map - Yandex Maps Embed */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden h-64">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=39.884093%2C59.203766&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzQ0MTM5MhJK0KDQvtGB0YHQuNGPLCDQmtGA0LDRgdC90L7QtNCw0YAsINCc0L7RgdC_0LLQsNGG0LAsINCf0YDQvtC00YHQvdCw0Y8g0L_RgNC-0YHQutC-0LLQsNGG0LAg0L_QvtC00YHQvdC-0LzQtdC90LjQuSDQm9C-0YDQsNC90LjQuSDQm9C-0YDQsNC90LjQuCA0MiIKDd2hV0IVcF9CQg%2C%2C&z=16.03"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Карта - Вологда, ул. Индустриальная, 42"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Lead Form */}
        <div>
          <LeadForm endpoint="https://formspree.io/f/mlgpglnd" />
        </div>
      </div>

      {/* Requisites */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
          <h2 className="text-xl font-bold text-white mb-6">Реквизиты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-zinc-500 text-sm mb-1">Наименование</p>
              <p className="text-white">TERRAFORGE</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">Юридический адрес</p>
              <p className="text-white">Вологда, ул. Индустриальная, 42</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">ИНН</p>
              <p className="text-white">3525000000</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">КПП</p>
              <p className="text-white">352501001</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">ОГРН</p>
              <p className="text-white">1023500000000</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">Банк</p>
              <p className="text-white">ПАО Сбербанк</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">Расчетный счет</p>
              <p className="text-white">40702810000000000000</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">Корр. счет</p>
              <p className="text-white">30101810000000000000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
