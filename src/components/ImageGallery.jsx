import { useState } from 'react';
import Image from 'next/image';

export default function ImageGallery({ photos }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!photos || photos.length === 0) return null;

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(photo)}
            className="relative aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden cursor-pointer group"
          >
            {/* Optimized Image with Next.js Image component */}
            {photo.src ? (
              <Image
                src={photo.src}
                alt={photo.alt || photo.caption || ''}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={photo.blurDataURL || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="}
              />
            ) : (
              // Fallback gradient if no image src provided
              <div className="absolute inset-0 bg-gradient-to-br from-solar-400 to-energy-500 opacity-40" />
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-200" />

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 z-10">
              <p className="text-white text-xs font-medium line-clamp-2">{photo.caption}</p>
            </div>

            {/* View icon on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Optimized lightbox image */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
              {selectedImage.src ? (
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt || selectedImage.caption || ''}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-contain"
                  quality={95}
                  priority
                  placeholder="blur"
                  blurDataURL={selectedImage.blurDataURL || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="}
                />
              ) : (
                // Fallback gradient
                <div className="absolute inset-0 bg-gradient-to-br from-solar-400 to-energy-500" />
              )}
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-white text-lg">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
