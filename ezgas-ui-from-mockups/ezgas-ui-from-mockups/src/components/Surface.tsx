import clsx from 'clsx'

export default function Surface({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={clsx(
        'bg-white rounded-2xl shadow-card border border-gray-100',
        className,
      )}
    >
      {children}
    </div>
  )
}
