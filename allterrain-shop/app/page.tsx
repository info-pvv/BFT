export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          ВЕЗДЕХОД <span className="text-orange-500">«БОРЕЙ»</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
          Надёжный вездеход на мостах «Волга» с КПП ВАЗ. 
          Проходимость, проверенная временем. Ремонтопригодность в любых условиях.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/catalog"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded transition-colors"
          >
            Смотреть комплектации
          </a>
          <a
            href="#features"
            className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 px-8 rounded transition-colors border border-zinc-700"
          >
            Узнать больше
          </a>
        </div>
      </section>

      {/* Key Advantages */}
      <section id="features" className="py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Почему выбирают «Борей»
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded">
            <div className="text-orange-500 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Мосты «Волга»</h3>
            <p className="text-zinc-400 text-sm">
              Неубиваемая ходовая часть. Проверенная десятилетиями конструкция. 
              Доступность запчастей в любом магазине.
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded">
            <div className="text-orange-500 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">КПП ВАЗ</h3>
            <p className="text-zinc-400 text-sm">
              Знакомая каждому российскому водителю коробка передач. 
              Простота обслуживания и ремонта.
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded">
            <div className="text-orange-500 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Колеса низкого давления</h3>
            <p className="text-zinc-400 text-sm">
              От «Урала» — максимальная проходимость по снегу, болоту, песку. 
              Минимальное давление на грунт.
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded">
            <div className="text-orange-500 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">От 520 000 ₽</h3>
            <p className="text-zinc-400 text-sm">
              Доступная цена за полноценный вездеход. 
              Лизинг и рассрочка от партнёров.
            </p>
          </div>
        </div>
      </section>

      {/* Models Preview */}
      <section className="py-16">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Три комплектации — один надёжный вездеход
        </h2>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          Выберите подходящую конфигурацию под ваши задачи и бюджет
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Standard */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
            <div className="text-orange-500 text-sm font-semibold uppercase mb-2">
              Базовая
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Стандарт</h3>
            <div className="text-3xl font-bold text-orange-500 mb-4">
              520 000 ₽
            </div>
            <ul className="text-zinc-400 text-sm space-y-2 mb-6 text-left">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Мосты «Волга»
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                КПП ВАЗ 2110
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Двигатель 20-30 л.с.
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                ГУР с гидроцилиндром
              </li>
            </ul>
            <a
              href="/catalog/borey-standard"
              className="block w-full bg-zinc-800 hover:bg-orange-500 text-white font-semibold py-3 px-4 rounded transition-colors"
            >
              Подробнее
            </a>
          </div>

          {/* Comfort */}
          <div className="bg-zinc-900 border-2 border-orange-500 rounded-lg p-6 text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-semibold px-4 py-1 rounded">
              Популярный выбор
            </div>
            <div className="text-orange-500 text-sm font-semibold uppercase mb-2">
              Оптимальная
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Комфорт</h3>
            <div className="text-3xl font-bold text-orange-500 mb-4">
              680 000 ₽
            </div>
            <ul className="text-zinc-400 text-sm space-y-2 mb-6 text-left">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Всё из «Стандарт»
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Тент с печкой
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                2 сиденья + багажник
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Лебёдка + фаркоп
              </li>
            </ul>
            <a
              href="/catalog/borey-comfort"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded transition-colors"
            >
              Подробнее
            </a>
          </div>

          {/* Premium */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
            <div className="text-orange-500 text-sm font-semibold uppercase mb-2">
              Максимальная
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Премиум</h3>
            <div className="text-3xl font-bold text-orange-500 mb-4">
              890 000 ₽
            </div>
            <ul className="text-zinc-400 text-sm space-y-2 mb-6 text-left">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Закрытый кузов
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Независимый отопитель
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Приборная панель
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Шумоизоляция
              </li>
            </ul>
            <a
              href="/catalog/borey-premium"
              className="block w-full bg-zinc-800 hover:bg-orange-500 text-white font-semibold py-3 px-4 rounded transition-colors"
            >
              Подробнее
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Готовы заказать вездеход?
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Оставьте заявку на тест-драйв или консультацию. 
            Поможем выбрать комплектацию под ваши задачи.
          </p>
          <a
            href="/contacts"
            className="inline-block bg-white text-orange-500 hover:bg-zinc-100 font-semibold py-3 px-8 rounded transition-colors"
          >
            Связаться с нами
          </a>
        </div>
      </section>
    </div>
  );
}
