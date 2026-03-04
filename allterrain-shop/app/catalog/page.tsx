'use client';

import { useState } from 'react';
import VehicleCard from '../components/VehicleCard';
import vehiclesData from '../../data/vehicles.json';

type Category = 'all' | 'light' | 'medium' | 'heavy';

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'light', label: 'Лёгкие' },
  { value: 'medium', label: 'Средние' },
  { value: 'heavy', label: 'Тяжёлые' },
];

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredVehicles =
    activeCategory === 'all'
      ? vehiclesData.vehicles
      : vehiclesData.vehicles.filter((v) => v.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        Каталог вездеходов
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={`px-6 py-2 rounded font-semibold transition-colors ${
              activeCategory === category.value
                ? 'bg-orange-500 text-white'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredVehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <p className="text-zinc-400 text-center py-12">
          В данной категории пока нет техники
        </p>
      )}
    </div>
  );
}
