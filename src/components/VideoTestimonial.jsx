import Image from 'next/image';
import { Play } from 'lucide-react';

export default function VideoTestimonial({ customerName, location, thumbnail, savings, title, duration, videoUrl = '#' }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
      <div className="relative h-64 w-full">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Play button overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play className="w-8 h-8 text-solar-600 ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Video info overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <h4 className="text-white font-semibold text-lg mb-1">{title}</h4>
        <p className="text-white/90 font-medium">{customerName}</p>
        <p className="text-white/80 text-sm">{location}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-white/90 text-sm font-semibold">
            Saved ${savings.toLocaleString()}/year
          </p>
          <span className="text-white/70 text-xs">{duration}</span>
        </div>
      </div>

      {/* Optional: If you want actual video playback, uncomment this
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
        aria-label={`Watch ${title}`}
      />
      */}
    </div>
  );
}
