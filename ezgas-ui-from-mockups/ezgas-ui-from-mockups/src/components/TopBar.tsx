import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

export type TopBarIcon = {
  to: string
  icon: React.ReactNode
  ariaLabel?: string
}

export default function TopBar({
  title,
  rightIcons = [],
}: {
  title: string
  rightIcons?: TopBarIcon[]
}) {
  return (
    <header className="h-[76px] w-full bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]">
      <div className="mx-auto max-w-6xl h-full px-8 flex items-center justify-between text-white">
        <div className="font-semibold text-lg">{title}</div>

        <div className="flex items-center gap-4">
          {rightIcons.map((it, idx) => (
            <NavLink
              key={`${it.to}-${idx}`}
              to={it.to}
              className={({ isActive }) =>
                clsx(
                  'inline-flex h-10 w-10 items-center justify-center rounded-full transition',
                  isActive ? 'bg-white/20' : 'hover:bg-white/15',
                )
              }
              aria-label={it.ariaLabel ?? `Navigate to ${it.to}`}
            >
              {it.icon}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
