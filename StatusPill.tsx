import clsx from 'clsx'

export default function StatusPill({ status }: { status: string }) {
  const s = status.toUpperCase()
  const cls =
    s === 'COMPLETED'
      ? 'text-green-600'
      : s === 'ACTIVE'
        ? 'text-green-600'
        : s === 'IN PROGRESS'
          ? 'text-orange-500'
          : s === 'CANCELED' || s === 'CANCELLED'
            ? 'text-red-500'
            : 'text-gray-600'

  return <span className={clsx('font-semibold', cls)}>{s}</span>
}
