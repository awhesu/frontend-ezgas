import { Link } from 'react-router-dom'
import Surface from '../components/Surface'

export default function NotFoundPage() {
  return (
    <Surface className="p-8">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-gray-600">The page you’re looking for doesn’t exist in this UI scaffold.</p>
      <div className="mt-6 flex gap-3">
        <Link
          to="/app/home"
          className="rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-4 py-2 text-white font-medium"
        >
          Go to App Home
        </Link>
        <Link
          to="/admin/dashboard"
          className="rounded-xl border border-gray-200 bg-white px-4 py-2 font-medium"
        >
          Go to Admin Dashboard
        </Link>
      </div>
    </Surface>
  )
}
