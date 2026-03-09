'use client';

import { useState } from 'react';

interface GalleryProps {
  images: string[];
  vehicleName: string;
}

export default function Gallery({ images, vehicleName }: GalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div>
      <div className="aspect-[4/3] bg-slate-800 border border-slate-700 rounded-xl overflow-hidden mb-4">
        <img
          src={images[selectedImageIndex] || '/images/placeholder.jpg'}
          alt={vehicleName}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`aspect-square bg-slate-800 border rounded-xl overflow-hidden transition-colors ${
                selectedImageIndex === index
                  ? 'border-[#ff6b35] ring-2 ring-[#ff6b35]/50'
                  : 'border-slate-700 hover:border-[#ff6b35]'
              }`}
              aria-label={`Показать фото ${index + 1} для ${vehicleName}`}
              title={`Показать фото ${index + 1}`}
            >
              <img
                src={image}
                alt={`${vehicleName} - фото ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
