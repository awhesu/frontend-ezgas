import { Heart, MapPin, Phone, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import type { Station } from '../data/mock'

export default function StationCard({ station }: { station: Station }) {
  return (
    <div className="rounded-2xl bg-white shadow-card border border-gray-100 overflow-hidden">
      <div className="relative">
        <img src={station.imageUrl} alt={station.name} className="h-36 w-full object-cover" />
        <button
          type="button"
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 shadow flex items-center justify-center"
          aria-label="Add to favorites"
        >
          <Heart size={18} className="text-[var(--brand-to)]" />
        </button>
      </div>

      <div className="p-4">
        <Link to={`/app/station/${station.id}`} className="font-semibold hover:underline">
          {station.name}
        </Link>

        <div className="mt-2 space-y-1 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>{station.distanceKm.toFixed(1)} km · {station.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>{station.phone}</span>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-2 text-sm">
          <span className={clsx('font-medium', station.isOpen ? 'text-green-600' : 'text-red-600')}>
            {station.isOpen ? 'Open' : 'Closed'}
          </span>
          <span className="text-gray-500">· Closes {station.closesAt}</span>
        </div>

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Star size={14} className="text-[var(--brand-from)]" />
            <span className="font-medium text-gray-900">{station.rating.toFixed(1)}</span>
          </span>
          <span className="text-gray-500">({station.reviews} Reviews)</span>
        </div>

        <div className="mt-2 text-xs text-gray-500">{station.eta}</div>
      </div>
    </div>
  )
}
