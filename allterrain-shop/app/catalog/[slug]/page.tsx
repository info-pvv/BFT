import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import vehiclesData from '../../../data/vehicles.json';
import LeadForm from '../../components/LeadForm';
import LeasingCalculator from './LeasingCalculator';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price);
}

function getVehicle(slug: string) {
  return vehiclesData.vehicles.find((v) => v.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicle(slug);

  if (!vehicle) {
    return {
      title: 'Вездеход не найден',
    };
  }

  return {
    title: `${vehicle.name} — Купить вездеход Боре | TERRAFORGE`,
    description: vehicle.description,
    openGraph: {
      title: `${vehicle.name} — TERRAFORGE`,
      description: vehicle.description,
      images: vehicle.images.map((img) => img),
      type: 'product',
    },
  };
}

export async function generateStaticParams() {
  return vehiclesData.vehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export default async function VehiclePage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = getVehicle(slug);

  if (!vehicle) {
    notFound();
  }

  const discount = vehicle.oldPrice
    ? Math.round(((vehicle.oldPrice - vehicle.price) / vehicle.oldPrice) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-8">
        <ol className="flex items-center space-x-2 text-zinc-400">
          <li>
            <a href="/" className="hover:text-orange-500 transition-colors">
              Главная
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="/catalog" className="hover:text-orange-500 transition-colors">
              Каталог
            </a>
          </li>
          <li>/</li>
          <li className="text-white">{vehicle.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery */}
        <div>
          <div className="aspect-[4/3] bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mb-4">
            <img
              src={vehicle.images[0] || '/images/placeholder.jpg'}
              alt={vehicle.name}
              className="w-full h-full object-cover"
            />
          </div>
          {vehicle.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {vehicle.images.slice(1).map((image, index) => (
                <button
                  key={index}
                  className="aspect-square bg-zinc-900 border border-zinc-800 rounded overflow-hidden hover:border-orange-500 transition-colors"
                  aria-label={`Показать фото ${index + 2} для ${vehicle.name}`}
                  title={`Показать фото ${index + 2}`}
                >
                  <img
                    src={image}
                    alt={`${vehicle.name} - фото ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded uppercase">
              {vehicle.category === 'standard' && 'Стандарт'}
              {vehicle.category === 'comfort' && 'Комфорт'}
              {vehicle.category === 'premium' && 'Премиум'}
            </span>
            {vehicle.inStock ? (
              <span className="bg-green-900/50 text-green-400 text-xs font-semibold px-3 py-1 rounded border border-green-800">
                В наличии
              </span>
            ) : (
              <span className="bg-red-900/50 text-red-400 text-xs font-semibold px-3 py-1 rounded border border-red-800">
                Нет в наличии
              </span>
            )}
            {discount > 0 && (
              <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded">
                -{discount}%
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {vehicle.name}
          </h1>

          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-3xl font-bold text-orange-500">
              {formatPrice(vehicle.price)}
            </span>
            {vehicle.oldPrice && (
              <span className="text-xl text-zinc-500 line-through">
                {formatPrice(vehicle.oldPrice)}
              </span>
            )}
          </div>

          <p className="text-zinc-300 mb-8 leading-relaxed">
            {vehicle.description}
          </p>

          {/* Key Features */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4">Преимущества</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {vehicle.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-zinc-300 text-sm"
                >
                  <svg
                    className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Specs Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Характеристики</h2>
            <table className="w-full">
              <tbody>
                {Object.entries(vehicle.specs).map(([key, value]) => (
                  <tr key={key} className="border-b border-zinc-800 last:border-0">
                    <td className="py-3 text-zinc-500 text-sm">{key}</td>
                    <td className="py-3 text-zinc-300 text-sm text-right font-medium">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Lead Form */}
          <LeadForm vehicleName={vehicle.name} endpoint="https://formspree.io/f/YOUR_FORM_ID" />

          {/* Download Brochure */}
          <div className="mt-6 bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
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
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 13h6m-3-3v6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Брошюра «Борей»</p>
                <p className="text-zinc-400 text-sm">PDF, 2.4 MB</p>
              </div>
            </div>
            <a
              href="/brochures/borey.pdf"
              download
              className="bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-2 px-4 rounded transition-colors flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Скачать</span>
            </a>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <LeasingCalculator price={vehicle.price} />
          
          {/* Quick Contacts */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Быстрая связь</h3>
            <div className="space-y-3">
              <a
                href="tel:+79991234567"
                className="flex items-center justify-between p-3 bg-zinc-800 rounded hover:bg-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-3">
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
                  <span className="text-white">+7 (999) 123-45-67</span>
                </div>
                <svg
                  className="w-5 h-5 text-zinc-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/79991234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-green-900/30 border border-green-800 rounded hover:bg-green-900/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="text-white">WhatsApp</span>
                </div>
                <svg
                  className="w-5 h-5 text-zinc-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
