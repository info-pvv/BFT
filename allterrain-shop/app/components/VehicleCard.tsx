import Link from 'next/link';

interface SpecsGroup {
  [key: string]: string;
}

interface Specs {
  [key: string]: SpecsGroup;
}

interface AdditionalOption {
  id: string;
  name: string;
  price: number;
}

interface Vehicle {
  id: string;
  name: string;
  slug: string;
  price: number;
  oldPrice?: number | null;
  category: string;
  inStock: boolean;
  stockStatus?: string;
  recommended?: boolean;
  shortDescription: string;
  images: string[];
  specs: Specs;
  highlights: string[];
  additionalOptions?: AdditionalOption[];
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
    optima: 'Оптима',
    profi: 'Профи',
  };
  return labels[category] || category;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const discount = vehicle.oldPrice
    ? Math.round(((vehicle.oldPrice - vehicle.price) / vehicle.oldPrice) * 100)
    : 0;

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-[#ff6b35] transition-all group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-700">
        <img
          src={vehicle.images[0] || '/images/placeholder.jpg'}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Recommended Badge */}
        {vehicle.recommended && (
          <div className="absolute top-3 left-3">
            <span className="bg-[#ff6b35] text-white text-xs font-semibold px-3 py-1 rounded-full">
              Рекомендуем
            </span>
          </div>
        )}

        {/* Category Badge */}
        {!vehicle.recommended && (
          <div className="absolute top-3 left-3">
            <span className="bg-slate-900/80 text-white text-xs font-semibold px-3 py-1 rounded uppercase backdrop-blur-sm">
              {getCategoryLabel(vehicle.category)}
            </span>
          </div>
        )}

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
            <span className="bg-slate-800 text-white text-sm font-semibold px-4 py-2 rounded">
              Нет в наличии
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
        <p className="text-slate-400 text-sm mb-4">{vehicle.shortDescription}</p>
        
        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-[#ff6b35]">
              {formatPrice(vehicle.price)}
            </span>
            {vehicle.oldPrice && (
              <span className="text-slate-500 line-through text-sm">
                {formatPrice(vehicle.oldPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Key Features */}
        <ul className="space-y-1 mb-4">
          {vehicle.highlights.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-slate-300">
              <svg
                className="w-4 h-4 text-[#ff6b35] mr-2 mt-0.5 flex-shrink-0"
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
          className="block w-full bg-slate-700 hover:bg-[#ff6b35] text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}
