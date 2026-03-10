import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Вездеход «Борей» — покоритель бездорожья на мостах «Волга»',
  description: 'Продается новый, готовый к любым испытаниям вездеход «Борей». Ваш пропуск в самые труднодоступные уголки природы. В наличии и под заказ!',
  keywords: 'вездеход Борей, купить вездеход, вездеход на мостах Волга, вездеход низкого давления, вездеход для охоты, вездеход для рыбалки',
  openGraph: {
    title: 'Вездеход «Борей» — покоритель бездорожья',
    description: 'Надёжный вездеход на мостах Волга. От 520 000 ₽',
    images: ['/images/vehicles/borey-og.jpg'],
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Вездеход «Борей» — покоритель бездорожья',
    description: 'Надёжный вездеход на мостах Волга. От 520 000 ₽',
  },
};

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/vehicles/borey-front-big.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Вездеход <span className="text-[#ff6b35]">«Борей»</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-normal text-slate-300">
              покоритель бездорожья
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Ваш надежный спутник для охоты, рыбалки и настоящих приключений.
            <br />
            <span className="text-[#ff6b35] font-semibold">В наличии и под заказ!</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/catalog"
              className="inline-flex items-center bg-[#ff6b35] hover:bg-[#e55a28] !text-white font-semibold py-4 px-8 rounded-lg transition-all hover:scale-105"
            >
              Выбрать комплектацию
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/catalog"
              className="inline-flex items-center bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 px-8 rounded-lg transition-all border border-slate-600"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 36v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Рассчитать лизинг
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#ff6b35]">520k</div>
              <div className="text-sm text-slate-400">Стартовая цена</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#ff6b35]">3</div>
              <div className="text-sm text-slate-400">Комплектации</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#ff6b35]">700</div>
              <div className="text-sm text-slate-400">Грузоподъёмность, кг</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#ff6b35]">20-30</div>
              <div className="text-sm text-slate-400">Мощность, л.с.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="section-spacing">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Преимущества <span className="text-[#ff6b35]">«Борея»</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 card-grid-gap">
          {/* Card 1 */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-[#ff6b35] transition-colors group">
            <div className="w-14 h-14 bg-[#1a3c27]/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1a3c27] transition-colors">
              <svg className="w-8 h-8 text-[#ff6b35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Абсолютная проходимость</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Уникальная конструкция и колеса низкого давления позволяют преодолевать препятствия, недоступные обычному транспорту.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-[#ff6b35] transition-colors group">
            <div className="w-14 h-14 bg-[#1a3c27]/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1a3c27] transition-colors">
              <svg className="w-8 h-8 text-[#ff6b35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Проверенная надёжность</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              В основе — неубиваемая ходовая часть на мостах «Волга» и новая КПП ВАЗ 2110. Это ремонтопригодные и знакомые любому механику узлы.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-[#ff6b35] transition-colors group">
            <div className="w-14 h-14 bg-[#1a3c27]/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1a3c27] transition-colors">
              <svg className="w-8 h-8 text-[#ff6b35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Комфорт и практичность</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Продуманные детали, такие как лобовое стекло и места для хранения, делают каждую поездку удобнее.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-[#ff6b35] transition-colors group">
            <div className="w-14 h-14 bg-[#1a3c27]/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1a3c27] transition-colors">
              <svg className="w-8 h-8 text-[#ff6b35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Гибкость под ваши задачи</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Доступен в готовых комплектациях или может быть собран с учетом ваших индивидуальных требований.
            </p>
          </div>
        </div>
      </section>

      {/* Почему выбирают Борей */}
      <section className="section-spacing bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Почему выбирают <span className="text-[#ff6b35]">вездеход «Борей»</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-grid-gap max-w-6xl mx-auto">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                ),
                title: 'Уникальная конструкция',
                text: 'Переломная рама шкворневого типа и колеса низкого давления обеспечивают отличную проходимость.'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'Неубиваемая ходовая',
                text: 'Мосты «Волга» выдерживают экстремальные нагрузки и ремонтируются в любом сервисе.'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                ),
                title: 'Ремонтопригодность',
                text: 'Все узлы и агрегаты доступны, запчасти есть в любом магазине.'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                ),
                title: 'Комфорт в салоне',
                text: 'Эргономичное расположение органов управления и удобные сиденья.'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                ),
                title: 'Вместительные рундуки',
                text: 'Продуманное пространство для хранения снаряжения и инструментов.'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                ),
                title: 'Гидроусилитель руля',
                text: 'Лёгкое и точное управление даже в сложных условиях бездорожья.'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1a3c27] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#ff6b35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Комплектации */}
      <section className="section-spacing">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Комплектации <span className="text-[#ff6b35]">«Борея»</span>
        </h2>
        <p className="text-slate-400 text-center section-gap-large max-w-2xl mx-auto">
          Выберите подходящую конфигурацию под ваши задачи и бюджет
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 card-grid-gap max-w-6xl mx-auto">
          {/* Standard */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-[#ff6b35] transition-all">
            <div className="aspect-[4/3] bg-slate-700 overflow-hidden">
              <img
                src="/images/vehicles/borey-front.png"
                alt="Борей Стандарт"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Стандарт</h3>
              <p className="text-slate-400 text-sm mb-4">Базовая версия</p>
              <div className="text-3xl font-bold text-[#ff6b35] mb-6">520 000 ₽</div>
              <ul className="space-y-2 mb-6">
                {[
                  'Мосты «Волга»',
                  'КПП ВАЗ 2110',
                  'Двигатель 20 л.с.',
                  'ГУР',
                  'Лобовое стекло',
                  'Водительское сиденье'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-300">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/catalog/borey-standard"
                className="block w-full bg-slate-700 hover:bg-[#ff6b35] text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Подробнее
              </Link>
            </div>
          </div>

          {/* Optima - Recommended */}
          <div className="bg-slate-800 border-2 border-[#ff6b35] rounded-xl overflow-hidden transform md:-translate-y-4 shadow-xl shadow-[#ff6b35]/20">
            <div className="bg-[#ff6b35] text-white text-center py-2 text-sm font-semibold">
              Рекомендуемая комплектация
            </div>
            <div className="aspect-[4/3] bg-slate-700 overflow-hidden">
              <img
                src="/images/vehicles/borey_version2-common.png"
                alt="Борей Оптима"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Оптима</h3>
              <p className="text-slate-400 text-sm mb-4">Оптимальный выбор</p>
              <div className="text-3xl font-bold text-[#ff6b35] mb-6">540 000 ₽</div>
              <ul className="space-y-2 mb-6">
                {[
                  'Всё из «Стандарт»',
                  '2 сиденья',
                  'Багажник на крыше',
                  'Расширенные рундуки',
                  'Улучшенная эргономика'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-300">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/catalog/borey-optima"
                className="block w-full bg-[#ff6b35] hover:bg-[#e55a28] !text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Подробнее
              </Link>
            </div>
          </div>

          {/* Profi */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-[#ff6b35] transition-all">
            <div className="aspect-[4/3] bg-slate-700 overflow-hidden">
              <img
                src="/images/vehicles/borey-version3-front.jpg"
                alt="Борей Профи"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white">Профи</h3>
                <span className="bg-red-500/20 text-red-400 text-xs font-semibold px-2 py-1 rounded">-5%</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">Максимальная версия</p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-[#ff6b35]">590 000 ₽</span>
                <span className="text-lg text-slate-500 line-through">620 000 ₽</span>
              </div>
              <ul className="space-y-2 mb-6">
                {[
                  'Закрытый кузов',
                  'Отопитель салона',
                  'Двигатель 30 л.с.',
                  'Приборная панель',
                  'Лебёдка в комплекте',
                  'Фаркоп'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-300">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/catalog/borey-profi"
                className="block w-full bg-slate-700 hover:bg-[#ff6b35] text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Дополнительные опции */}
      <section className="section-spacing bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Дополнительные <span className="text-[#ff6b35]">опции</span>
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-3xl mx-auto">
            Сделайте вашего «Борея» еще более функциональным
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 card-grid-gap-small max-w-5xl mx-auto">
            {[
              { name: 'Лебёдка', icon: '⚓', price: 'от 25 000 ₽', desc: 'С выводами спереди и сзади' },
              { name: 'Багажники', icon: '📦', price: 'от 15 000 ₽', desc: 'На крыльях' },
              { name: 'Фаркоп', icon: '🔗', price: '8 000 ₽', desc: 'Для буксировки' },
              { name: 'Защита картера', icon: '🛡️', price: '12 000 ₽', desc: 'Для экстремальных условий' },
              { name: 'Камуфляж', icon: '🎨', price: '20 000 ₽', desc: 'Для охоты' }
            ].map((option, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-[#ff6b35] transition-colors">
                <div className="text-4xl mb-3">{option.icon}</div>
                <h3 className="text-white font-semibold mb-1">{option.name}</h3>
                <p className="text-slate-500 text-xs mb-2">{option.desc}</p>
                <p className="text-[#ff6b35] text-sm font-medium">{option.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="flex justify-center px-4">
          <div className="bg-gradient-to-r from-[#1a3c27] to-[#0f291a] rounded-2xl p-8 md:p-12 text-center max-w-4xl w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Сделайте выбор в пользу настоящей свободы!
          </h2>
          <p className="text-slate-300 mb-8 max-w-3xl mx-auto">
            Вездеход «Борей» — это не расходы, это инвестиция в ваши увлечения и уверенность в любой дороге.
            Он ждет своего хозяина, готового к новым горизонтам.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contacts"
              className="inline-flex items-center bg-[#ff6b35] hover:bg-[#e55a28] !text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Оставить заявку
            </Link>
            <a
              href="tel:+79218209245"
              className="inline-flex items-center bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors border border-slate-600"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +7 (921) 820-92-45
            </a>
          </div>
          <p className="text-slate-400 text-sm mt-8 max-w-2xl mx-auto">
            Свяжитесь с нами, чтобы уточнить наличие, обсудить детали заказа или записаться на тест-драйв.
            <br />
            <span className="text-[#ff6b35] font-semibold">Не упустите шанс стать владельцем легенды бездорожья!</span>
          </p>
          </div>
        </div>
      </section>
    </div>
  );
}
