import { Heart, Home, LogOut, Receipt, Bell, CalendarDays, User2, Truck, CreditCard, Settings2 } from 'lucide-react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import TopBar from '../components/TopBar'

const navItems = [
  { to: '/app/home', label: 'Home', icon: <Home size={18} /> },
  { to: '/app/schedule', label: 'Schedule LPG', icon: <CalendarDays size={18} /> },
  { to: '/app/order-tracking', label: 'Order Tracking', icon: <Truck size={18} /> },
  { to: '/app/order-history', label: 'Order History', icon: <Receipt size={18} /> },
  { to: '/app/payments', label: 'Payments', icon: <CreditCard size={18} /> },
  { to: '/app/profile', label: 'Profile Settings', icon: <Settings2 size={18} /> },
]

function useTitleFromPath(): string {
  const { pathname } = useLocation()
  if (pathname.includes('/app/home')) return 'Home'
  if (pathname.includes('/app/schedule')) return 'Schedule LPG'
  if (pathname.includes('/app/order-tracking')) return 'Order Tracking'
  if (pathname.includes('/app/order-history')) return 'Order History'
  if (pathname.includes('/app/payments')) return 'Payments'
  if (pathname.includes('/app/profile')) return 'Profile Settings'
  if (pathname.includes('/app/favorites')) return 'Favorites'
  if (pathname.includes('/app/notifications')) return 'Notifications'
  if (pathname.includes('/app/station')) return 'Gas Station Details'
  return 'EZGAS'
}

export default function ConsumerLayout() {
  const title = useTitleFromPath()

  return (
    <div className="min-h-screen flex">
      <aside className="w-72 shrink-0 bg-[var(--sidebar-bg)] text-white">
        <div className="px-6 py-6">
          <div className="text-3xl font-extrabold tracking-tight">
            <span className="text-white">EZ</span>
            <span className="text-[var(--brand-from)]">GAS</span>
          </div>
        </div>

        <nav className="px-4 space-y-2">
          {navItems.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition',
                  isActive
                    ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white'
                    : 'bg-[var(--sidebar-surface)]/70 hover:bg-[var(--sidebar-surface)]',
                )
              }
            >
              {it.icon}
              <span>{it.label}</span>
            </NavLink>
          ))}

          <div className="pt-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition',
                  isActive
                    ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white'
                    : 'bg-[var(--sidebar-surface)]/70 hover:bg-[var(--sidebar-surface)]',
                )
              }
            >
              <LogOut size={18} />
              <span>Logout</span>
            </NavLink>
          </div>
        </nav>
      </aside>

      <div className="flex-1 min-w-0">
        <TopBar
          title={title}
          rightIcons={[
            { to: '/app/notifications', icon: <Bell size={20} /> },
            { to: '/app/favorites', icon: <Heart size={20} /> },
            { to: '/app/profile', icon: <User2 size={20} /> },
          ]}
        />

        <main className="p-8">
          <div className="mx-auto max-w-6xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
