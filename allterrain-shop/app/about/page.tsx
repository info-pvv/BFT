import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О нас — TERRAFORGE',
  description: 'Производство вездеходов для экстремальных условий с 2010 года',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        О компании TERRAFORGE
      </h1>

      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 mb-8">
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            <span className="text-orange-500 font-bold">TERRAFORGE</span> — 
            российский производитель вездеходной техники для экстремальных условий. 
            С 2010 года мы создаём надёжные машины для работы и отдыха в самых 
            суровых уголках планеты.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed">
            От арктических пустынь до горных перевалов, от болотистых низменностей 
            до песчаных дюн — наша техника доказала свою эффективность в любых условиях.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">14+</div>
            <div className="text-zinc-400 text-sm">лет на рынке</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">2500+</div>
            <div className="text-zinc-400 text-sm">вездеходов выпущено</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">85</div>
            <div className="text-zinc-400 text-sm">регионов России</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-zinc-400 text-sm">сервисная поддержка</div>
          </div>
        </div>

        {/* Advantages */}
        <h2 className="text-2xl font-bold text-white mb-6">Наши преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Контроль качества</h3>
                <p className="text-zinc-400 text-sm">
                  Каждый вездеход проходит многоступенчатое тестирование перед 
                  отправкой клиенту.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
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
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Собственное производство</h3>
                <p className="text-zinc-400 text-sm">
                  Полный цикл производства на заводе в Москве обеспечивает 
                  контроль каждого этапа.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
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
                <h3 className="text-white font-semibold mb-2">Сервисная сеть</h3>
                <p className="text-zinc-400 text-sm">
                  Авторизованные сервисные центры в 45 городах России.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Лизинг и рассрочка</h3>
                <p className="text-zinc-400 text-sm">
                  Выгодные финансовые программы от партнёров банка.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-2xl font-bold text-white mb-6">Команда</h2>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
          <p className="text-zinc-300 leading-relaxed mb-6">
            Над созданием вездеходов работают инженеры с опытом в автомобильной 
            и аэрокосмической промышленности. Мы постоянно исследуем новые материалы 
            и технологии, чтобы наша техника оставалась надёжной в самых экстремальных условиях.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Каждый сотрудник TERRAFORGE разделяет нашу философию: нет недоступных 
            мест, есть недостаточно подготовленная техника. Мы исправляем это.
          </p>
        </div>
      </div>
    </div>
  );
}
