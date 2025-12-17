import { Bell, ChevronDown, LayoutDashboard, LogOut, Settings, User2, Users, CreditCard, PackageSearch, ShoppingBag } from 'lucide-react'
import clsx from 'clsx'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import React from 'react'
import TopBar from '../components/TopBar'

function useTitleFromPath(): string {
  const { pathname } = useLocation()
  if (pathname.includes('/admin/dashboard')) return 'Dashboard'
  if (pathname.includes('/admin/users/customers')) return 'Customer Management'
  if (pathname.includes('/admin/users/vendors')) return 'Vendor Management'
  if (pathname.includes('/admin/orders')) return 'Order Management'
  if (pathname.includes('/admin/services')) return 'Service Management'
  if (pathname.includes('/admin/subscription')) return 'Subscription'
  if (pathname.includes('/admin/notification')) return 'Notification'
  if (pathname.includes('/admin/settings')) return 'Settings'
  return 'Admin'
}

export default function AdminLayout() {
  const title = useTitleFromPath()
  const [openUsers, setOpenUsers] = React.useState(true)
  const [openSettings, setOpenSettings] = React.useState(true)

  const baseLink = 'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition'
  const inactiveLink = 'bg-[var(--sidebar-surface)]/70 hover:bg-[var(--sidebar-surface)] text-white'
  const activeLink = 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white'

  return (
    <div className="min-h-screen flex">
      <aside className="w-80 shrink-0 bg-[var(--sidebar-bg)] text-white">
        <div className="px-6 py-6">
          <div className="text-3xl font-extrabold tracking-tight">
            <span className="text-white">EZ</span>
            <span className="text-[var(--brand-from)]">GAS</span>
          </div>
        </div>

        <nav className="px-4 space-y-2">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => clsx(baseLink, isActive ? activeLink : inactiveLink)}
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </NavLink>

          <button
            type="button"
            onClick={() => setOpenUsers((v) => !v)}
            className={clsx(baseLink, inactiveLink, 'w-full justify-between')}
          >
            <span className="flex items-center gap-3">
              <Users size={18} />
              <span>User Management</span>
            </span>
            <ChevronDown size={18} className={clsx('transition', openUsers ? 'rotate-180' : 'rotate-0')} />
          </button>

          {openUsers && (
            <div className="pl-3 space-y-2">
              <NavLink
                to="/admin/users/customers"
                className={({ isActive }) => clsx(baseLink, isActive ? activeLink : inactiveLink)}
              >
                <User2 size={18} />
                <span>Customer Management</span>
              </NavLink>
              <NavLink
                to="/admin/users/vendors"
                className={({ isActive }) => clsx(baseLink, isActive ? activeLink : inactiveLink)}
              >
                <User2 size={18} />
                <span>Vendor Management</span>
              </NavLink>
            </div>
          )}

          <NavLink
            to="/admin/orders"
            className={({ isActive }) => clsx(baseLink, isActive ? activeLink : inactiveLink)}
          >
            <ShoppingBag size={18} />
            <span>Order Management</span>
          </NavLink>

          <NavLink
            to="/admin/services"
            className={({ isActive }) => clsx(baseLink, isActive ? activeLink : inactiveLink)}
          >
            <PackageSearch size={18} />
            <span>Service Management</span>
          </NavLink>

          <button
            type="button"
            onClick={() => setOpenSettings((v) => !v)}
            className={clsx(baseLink, inactiveLink, 'w-full justify-between')}
          >
            <span className="flex items-center gap-3">
              <Settings size={18} />
              <span>Settings</span>
            </span>
            <ChevronDown size={18} className={clsx('transition', openSettings ? 'rotate-180' : 'rotate-0')} />
          </button>

          {openSettings && (
            <div className="pl-3 space-y-2">
              <NavLink
                to="/admin/settings"
                className={({ isActive }) => clsx(baseLink, isActive ? activeLink : inactiveLink)}
              >
                <Settings size={18} />
                <span>Platform Settings</span>
              </NavLink>
            </div>
          )}

          <NavLink
            to="/admin/subscription"
            className={({ isActive }) => clsx(baseLink, isActive ? activeLink : inactiveLink)}
          >
            <CreditCard size={18} />
            <span>Subscription</span>
          </NavLink>

          <NavLink
            to="/admin/notification"
            className={({ isActive }) => clsx(baseLink, isActive ? activeLink : inactiveLink)}
          >
            <Bell size={18} />
            <span>Notification</span>
          </NavLink>

          <div className="pt-2">
            <NavLink
              to="/"
              className={({ isActive }) => clsx(baseLink, isActive ? activeLink : inactiveLink)}
            >
              <LogOut size={18} />
              <span>Logout</span>
            </NavLink>
          </div>
        </nav>
      </aside>

      <div className="flex-1 min-w-0">
        <TopBar title={title} rightIcons={[{ to: '/admin/settings', icon: <User2 size={20} /> }]} />

        <main className="p-8">
          <div className="mx-auto max-w-6xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
