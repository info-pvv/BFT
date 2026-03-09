'use client';

import { useState } from 'react';
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
    title: `${vehicle.name} — Купить вездеход Борей | TERRAFORGE`,
    description: vehicle.description,
    openGraph: {
      title: `${vehicle.name} — TERRAFORGE`,
      description: vehicle.description,
      images: vehicle.images.map((img) => img),
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return vehiclesData.vehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export default function VehiclePage({ params }: PageProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { slug } = await params;
  const vehicle = getVehicle(slug);

  if (!vehicle) {
    notFound();
  }

  const discount = vehicle.oldPrice
    ? Math.round(((vehicle.oldPrice - vehicle.price) / vehicle.oldPrice) * 100)
    : 0;

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-8">
        <ol className="flex items-center space-x-2 text-slate-400">
          <li>
            <a href="/" className="hover:text-[#ff6b35] transition-colors">
              Главная
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="/catalog" className="hover:text-[#ff6b35] transition-colors">
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
          <div className="aspect-[4/3] bg-slate-800 border border-slate-700 rounded-xl overflow-hidden mb-4">
            <img
              src={vehicle.images[selectedImageIndex] || '/images/placeholder.jpg'}
              alt={vehicle.name}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          {vehicle.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {vehicle.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`aspect-square bg-slate-800 border rounded-xl overflow-hidden transition-colors ${
                    selectedImageIndex === index
                      ? 'border-[#ff6b35] ring-2 ring-[#ff6b35]/50'
                      : 'border-slate-700 hover:border-[#ff6b35]'
                  }`}
                  aria-label={`Показать фото ${index + 1} для ${vehicle.name}`}
                  title={`Показать фото ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${vehicle.name} - фото ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="bg-[#1a3c27] text-white text-xs font-semibold px-3 py-1 rounded uppercase">
              {vehicle.category === 'standard' && 'Стандарт'}
              {vehicle.category === 'optima' && 'Оптима'}
              {vehicle.category === 'profi' && 'Профи'}
            </span>
            {vehicle.inStock ? (
              <span className="bg-green-900/50 text-green-400 text-xs font-semibold px-3 py-1 rounded border border-green-800">
                {vehicle.stockStatus || 'В наличии'}
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
            {vehicle.recommended && (
              <span className="bg-[#ff6b35] text-white text-xs font-semibold px-3 py-1 rounded">
                Рекомендуем
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {vehicle.name}
          </h1>

          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-3xl font-bold text-[#ff6b35]">
              {formatPrice(vehicle.price)}
            </span>
            {vehicle.oldPrice && (
              <span className="text-xl text-slate-500 line-through">
                {formatPrice(vehicle.oldPrice)}
              </span>
            )}
          </div>

          <p className="text-slate-300 mb-8 leading-relaxed">
            {vehicle.description}
          </p>

          {/* Key Features */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4">Преимущества</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {vehicle.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-slate-300 text-sm"
                >
                  <svg
                    className="w-5 h-5 text-[#ff6b35] mr-2 flex-shrink-0"
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
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Характеристики</h2>
            <div className="space-y-6">
              {Object.entries(vehicle.specs).map(([group, specs]) => (
                <div key={group}>
                  <h3 className="text-base font-bold text-[#ff6b35] mb-3">{group}</h3>
                  <div className="space-y-2">
                    {Object.entries(specs as Record<string, string>).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-slate-700 last:border-0">
                        <span className="text-slate-400 text-sm">{key}</span>
                        <span className="text-slate-200 text-sm font-medium text-right">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Package Options */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Варианты комплектации</h2>
            <div className="grid grid-cols-1 gap-4">
              {vehiclesData.vehicles.map((v) => (
                <div
                  key={v.id}
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    v.slug === vehicle.slug
                      ? 'border-[#ff6b35] bg-[#ff6b35]/10'
                      : 'border-slate-700 bg-slate-700/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-12 bg-slate-600 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={v.images[0]}
                        alt={v.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{v.name.split('—')[1]?.trim() || v.name}</p>
                      <p className="text-[#ff6b35] font-bold">{formatPrice(v.price)}</p>
                    </div>
                  </div>
                  {v.recommended && (
                    <span className="bg-[#ff6b35] text-white text-xs font-semibold px-2 py-1 rounded">
                      Рекомендуем
                    </span>
                  )}
                  {v.slug !== vehicle.slug && (
                    <a
                      href={`/catalog/${v.slug}`}
                      className="bg-slate-700 hover:bg-[#ff6b35] text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Выбрать
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Options */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Дополнительные опции</h2>
            <div className="space-y-3">
              {vehicle.additionalOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="options"
                      value={option.id}
                      className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-[#ff6b35] focus:ring-[#ff6b35]"
                    />
                    <span className="text-slate-200">{option.name}</span>
                  </div>
                  <span className="text-[#ff6b35] font-semibold">{formatPrice(option.price)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Lead Form */}
          <LeadForm 
            vehicleName={vehicle.name} 
            additionalOptions={vehicle.additionalOptions}
            endpoint="https://formspree.io/f/YOUR_FORM_ID" 
          />

          {/* Download Brochure */}
          <div className="mt-6 bg-slate-800/50 border border-slate-700 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-[#ff6b35]/20 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-[#ff6b35]"
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
                <p className="text-slate-400 text-sm">PDF, 2.4 MB</p>
              </div>
            </div>
            <a
              href="/brochures/borey.pdf"
              download
              className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center space-x-2"
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
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Быстрая связь</h3>
            <div className="space-y-3">
              <a
                href="tel:+79218209245"
                className="flex items-center justify-between p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#ff6b35]"
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
                  <span className="text-white">+7 (921) 820-92-45</span>
                </div>
                <svg
                  className="w-5 h-5 text-slate-500"
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
                href="https://wa.me/79218209245"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-green-900/30 border border-green-800 rounded-lg hover:bg-green-900/50 transition-colors"
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
                  className="w-5 h-5 text-slate-500"
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

          {/* Other Versions */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Другие комплектации</h3>
            <div className="space-y-3">
              {vehiclesData.vehicles
                .filter((v) => v.slug !== vehicle.slug)
                .map((v) => (
                  <a
                    key={v.id}
                    href={`/catalog/${v.slug}`}
                    className="flex items-center justify-between p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-slate-600 rounded-lg overflow-hidden">
                        <img
                          src={v.images[0]}
                          alt={v.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm group-hover:text-[#ff6b35] transition-colors">
                          {v.name.split('—')[1]?.trim() || v.name}
                        </p>
                        <p className="text-[#ff6b35] font-semibold text-sm">
                          {formatPrice(v.price)}
                        </p>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-slate-500 group-hover:text-[#ff6b35] transition-colors"
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
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
