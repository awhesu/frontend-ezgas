import Surface from '../../components/Surface'

const notifications = [
  { title: 'Your order is on the way', body: 'Driver has picked up your cylinder refill order.', time: '2m ago' },
  { title: 'Payment confirmed', body: 'We have confirmed your payment for order #96459761.', time: '1h ago' },
  { title: 'Order completed', body: 'Thanks! Please leave a rating for the vendor.', time: 'Yesterday' },
]

export default function NotificationsPage() {
  return (
    <Surface className="p-8">
      <h2 className="text-2xl font-semibold">Notification</h2>

      <div className="mt-6 space-y-3">
        {notifications.map((n) => (
          <div key={n.title} className="rounded-2xl border border-gray-100 bg-white shadow-card p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-semibold">{n.title}</div>
                <div className="mt-1 text-sm text-gray-600">{n.body}</div>
              </div>
              <div className="text-xs text-gray-400">{n.time}</div>
            </div>
          </div>
        ))}
      </div>
    </Surface>
  )
}
