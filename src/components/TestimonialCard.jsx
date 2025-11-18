import Image from 'next/image';
import { Star, Shield } from 'lucide-react';

export default function TestimonialCard({ name, location, photo, rating, savings, quote, date }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow h-full flex flex-col">
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? 'fill-yellow-500 text-yellow-500'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 text-lg mb-6 leading-relaxed flex-grow">
        "{quote}"
      </p>

      {/* Savings Highlight */}
      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
        <p className="text-2xl font-bold text-green-700">
          ${savings.toLocaleString()}
        </p>
        <p className="text-sm text-gray-600">Annual Savings</p>
      </div>

      {/* Customer Info */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={photo}
          alt={name}
          width={56}
          height={56}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{location}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>

      {/* Verified Badge */}
      <div className="flex items-center gap-2 text-sm text-green-600">
        <Shield className="w-4 h-4" />
        <span>Verified Customer</span>
      </div>
    </div>
  );
}
