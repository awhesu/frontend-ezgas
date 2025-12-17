import { Outlet, Link } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Admin</h1>
        <nav className="space-y-2">
          <Link to="/admin/dashboard">Dashboard</Link><br/>
          <Link to="/admin/orders">Orders</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}