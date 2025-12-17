import Surface from '../../components/Surface'

const notices = [
  { title: 'System Maintenance', body: 'We will perform maintenance tonight at 11PM.', audience: 'All Users' },
  { title: 'New Subscription Plan', body: 'Premium plan is now available.', audience: 'Customers' },
]

export default function AdminNotificationPage() {
  return (
    <Surface className="p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Notification</h2>
        <button type="button" className="rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-4 py-2 text-sm font-semibold text-white">
          New Notification
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-100 bg-white shadow-card p-6">
          <div className="text-sm font-semibold">Create Notification</div>

          <div className="mt-4 space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Title</label>
              <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="Notification title" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Audience</label>
              <select className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3">
                <option>All Users</option>
                <option>Customers</option>
                <option>Vendors</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" rows={5} placeholder="Write your message..." />
            </div>
            <button type="button" className="rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-6 py-3 text-white font-semibold">
              Send
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white shadow-card p-6">
          <div className="text-sm font-semibold">Recent Notifications</div>
          <div className="mt-4 space-y-3">
            {notices.map((n) => (
              <div key={n.title} className="rounded-2xl border border-gray-100 bg-white p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold">{n.title}</div>
                    <div className="mt-1 text-sm text-gray-600">{n.body}</div>
                    <div className="mt-2 text-xs text-gray-500">Audience: {n.audience}</div>
                  </div>
                  <button type="button" className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Surface>
  )
}
