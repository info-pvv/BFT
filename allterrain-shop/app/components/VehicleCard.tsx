import Link from 'next/link';

interface Specs {
  [key: string]: string;
}

interface Vehicle {
  id: string;
  name: string;
  slug: string;
  price: number;
  oldPrice?: number | null;
  category: string;
  inStock: boolean;
  shortDescription: string;
  images: string[];
  specs: Specs;
  highlights: string[];
}

interface VehicleCardProps {
  vehicle: Vehicle;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price);
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    standard: 'Стандарт',
    comfort: 'Комфорт',
    premium: 'Премиум',
  };
  return labels[category] || category;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const discount = vehicle.oldPrice
    ? Math.round(((vehicle.oldPrice - vehicle.price) / vehicle.oldPrice) * 100)
    : 0;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-orange-500/50 transition-colors group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
        <img
          src={vehicle.images[0] || '/images/placeholder.jpg'}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded uppercase">
            {getCategoryLabel(vehicle.category)}
          </span>
        </div>

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3">
            <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded">
              -{discount}%
            </span>
          </div>
        )}

        {/* Stock Status */}
        {!vehicle.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-zinc-800 text-white text-sm font-semibold px-4 py-2 rounded">
              Нет в наличии
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
        <p className="text-zinc-400 text-sm mb-4">{vehicle.shortDescription}</p>
        
        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-orange-500">
              {formatPrice(vehicle.price)}
            </span>
            {vehicle.oldPrice && (
              <span className="text-zinc-500 line-through text-sm">
                {formatPrice(vehicle.oldPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Key Features */}
        <ul className="space-y-1 mb-4">
          {vehicle.highlights.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-zinc-300">
              <svg
                className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0"
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

        <Link
          href={`/catalog/${vehicle.slug}`}
          className="block w-full bg-zinc-800 hover:bg-orange-500 text-white text-center font-semibold py-3 px-4 rounded transition-colors"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}
