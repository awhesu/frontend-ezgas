import Surface from '../../components/Surface'
import StationCard from '../../components/StationCard'
import { stations } from '../../data/mock'

export default function FavoritesPage() {
  return (
    <Surface className="p-8">
      <h2 className="text-2xl font-semibold">Favorite Station</h2>
      <p className="mt-2 text-gray-600 text-sm">This is a UI stub. Connect it to your real favorites endpoint later.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stations.slice(0, 6).map((st) => (
          <StationCard key={st.id} station={st} />
        ))}
      </div>
    </Surface>
  )
}
