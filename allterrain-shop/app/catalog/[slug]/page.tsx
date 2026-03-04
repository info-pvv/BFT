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
  return vehiclesData.vehicles.find((v) => v.id === Number(slug));
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
    title: `${vehicle.name} — Купить вездеход | TERRAFORGE`,
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
    slug: String(vehicle.id),
  }));
}

export default async function VehiclePage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = getVehicle(slug);

  if (!vehicle) {
    notFound();
  }

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
                <div
                  key={index}
                  className="aspect-square bg-zinc-900 border border-zinc-800 rounded overflow-hidden hover:border-orange-500 transition-colors cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`${vehicle.name} - фото ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded uppercase mb-4">
            {vehicle.category === 'light' && 'Лёгкий'}
            {vehicle.category === 'medium' && 'Средний'}
            {vehicle.category === 'heavy' && 'Тяжёлый'}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {vehicle.name}
          </h1>

          <p className="text-2xl text-orange-500 font-semibold mb-6">
            {formatPrice(vehicle.price)}
          </p>

          <p className="text-zinc-300 mb-8 leading-relaxed">
            {vehicle.description}
          </p>

          {/* Specs Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Характеристики</h2>
            <table className="w-full">
              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="py-3 text-zinc-500">Двигатель</td>
                  <td className="py-3 text-zinc-300 text-right">
                    {vehicle.specs.engine}
                  </td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-3 text-zinc-500">Вес</td>
                  <td className="py-3 text-zinc-300 text-right">
                    {vehicle.specs.weight}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 text-zinc-500">Грузоподъёмность</td>
                  <td className="py-3 text-zinc-300 text-right">
                    {vehicle.specs.capacity}
                  </td>
                </tr>
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
                <p className="text-white font-semibold">Брошюра {vehicle.name}</p>
                <p className="text-zinc-400 text-sm">PDF, 2.4 MB</p>
              </div>
            </div>
            <a
              href={`/brochures/${vehicle.name.toLowerCase().replace(/\s+/g, '-')}.pdf`}
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
        </div>
      </div>
    </div>
  );
}
