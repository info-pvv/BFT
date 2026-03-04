import Link from 'next/link';

interface Specs {
  engine: string;
  weight: string;
  capacity: string;
}

interface Vehicle {
  id: number;
  name: string;
  price: number;
  description: string;
  specs: Specs;
  images: string[];
  category: string;
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

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-orange-500/50 transition-colors group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={vehicle.images[0] || '/images/placeholder.jpg'}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded uppercase">
            {vehicle.category === 'light' && 'Лёгкий'}
            {vehicle.category === 'medium' && 'Средний'}
            {vehicle.category === 'heavy' && 'Тяжёлый'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
        <p className="text-orange-500 text-lg font-semibold mb-4">
          {formatPrice(vehicle.price)}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">Двигатель:</span>
            <span className="text-zinc-300">{vehicle.specs.engine}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">Вес:</span>
            <span className="text-zinc-300">{vehicle.specs.weight}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">Грузоподъёмность:</span>
            <span className="text-zinc-300">{vehicle.specs.capacity}</span>
          </div>
        </div>

        <Link
          href={`/catalog/${vehicle.id}`}
          className="block w-full bg-zinc-800 hover:bg-orange-500 text-white text-center font-semibold py-3 px-4 rounded transition-colors"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}
