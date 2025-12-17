import { Outlet, Link } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-black text-white p-4">
        <h1 className="text-xl font-bold mb-6">EZGas</h1>
        <nav className="space-y-2">
          <Link to="/app/home">Home</Link><br/>
          <Link to="/app/schedule">Schedule</Link><br/>
          <Link to="/app/order-tracking">Orders</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}