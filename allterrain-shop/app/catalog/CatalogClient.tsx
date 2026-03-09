'use client';

import { useState } from 'react';
import VehicleCard from '../components/VehicleCard';
import vehiclesData from '../../data/vehicles.json';

type Category = 'all' | 'standard' | 'optima' | 'profi';

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'standard', label: 'Стандарт' },
  { value: 'optima', label: 'Оптима' },
  { value: 'profi', label: 'Профи' },
];

export default function CatalogClient() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredVehicles =
    activeCategory === 'all'
      ? vehiclesData.vehicles
      : vehiclesData.vehicles.filter((v) => v.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
        Вездеход «Борей»
      </h1>
      <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
        Это не просто транспорт, а ваш пропуск в самые труднодоступные уголки природы. Создан для тех, кто ценит свободу, надежность и практичность в условиях полного бездорожья.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeCategory === category.value
                ? 'bg-[#ff6b35] text-white shadow-lg shadow-[#ff6b35]/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            {category.label}
          </button>
        ))}
        {activeCategory !== 'all' && (
          <button
            onClick={() => setActiveCategory('all')}
            className="px-6 py-3 rounded-lg font-semibold transition-all bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600 flex items-center gap-2"
            aria-label="Сбросить фильтры"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Сбросить
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredVehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <p className="text-slate-400 text-center py-12">
          В данной категории пока нет техники
        </p>
      )}
    </div>
  );
}
