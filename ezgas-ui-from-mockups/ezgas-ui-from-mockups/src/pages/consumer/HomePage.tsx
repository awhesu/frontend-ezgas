import { Search } from 'lucide-react'
import Surface from '../../components/Surface'
import StationCard from '../../components/StationCard'
import { stations } from '../../data/mock'

const categories = [
  {
    title: 'Cylinder Refilling',
    subtitle: 'Domestic • Commercial • Industrial',
    image: 'https://picsum.photos/seed/cyl/240/240',
    tone: 'bg-orange-50',
  },
  {
    title: 'Repair and Maintenance',
    subtitle: 'Request an engineer',
    image: 'https://picsum.photos/seed/repair/240/240',
    tone: 'bg-green-50',
  },
  {
    title: 'Equipment Sales',
    subtitle: 'Accessories & parts',
    image: 'https://picsum.photos/seed/equip/240/240',
    tone: 'bg-zinc-100',
  },
] as const

const filters = ['Domestics', 'Commercial', 'Industrial', 'Monthly Subscription']

export default function HomePage() {
  return (
    <Surface className="p-8">
      <h2 className="text-xl font-semibold">Find Gas Station</h2>

      <div className="mt-4 flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
        <Search size={18} className="text-gray-400" />
        <input
          className="w-full outline-none text-sm"
          placeholder="Search nearby LPG filling stations..."
        />
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">Category</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((c) => (
            <div key={c.title} className={`rounded-2xl border border-gray-100 shadow-card p-5 ${c.tone}`}>
              <div className="mx-auto h-28 w-28 rounded-full border-4 border-[var(--brand-to)] overflow-hidden">
                <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
              </div>
              <div className="mt-4 text-center font-semibold">{c.title}</div>
              <div className="mt-1 text-center text-xs text-gray-600">{c.subtitle}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {filters.map((f, idx) => (
            <button
              key={f}
              className={
                idx === 0
                  ? 'rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-4 py-2 text-sm font-medium text-white'
                  : 'rounded-xl border border-[var(--brand-to)]/60 bg-white px-4 py-2 text-sm font-medium text-gray-800'
              }
              type="button"
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Nearby LPG Gas Station</h3>
          <button className="text-sm text-gray-500 hover:text-gray-700" type="button">
            See More
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stations.slice(0, 9).map((st) => (
            <StationCard key={st.id} station={st} />
          ))}
        </div>
      </div>
    </Surface>
  )
}
