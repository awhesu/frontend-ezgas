import Surface from '../../components/Surface'

const plans = [
  { name: 'Basic', price: '₦2,000 / month', perks: 'Monthly booking', status: 'Active' },
  { name: 'Premium', price: '₦5,000 / month', perks: 'Priority delivery + discounts', status: 'Active' },
  { name: 'Enterprise', price: 'Custom', perks: 'Bulk + reporting', status: 'Inactive' },
]

export default function AdminSubscriptionPage() {
  return (
    <Surface className="p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Subscription Plans</h2>
        <button
          type="button"
          className="rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-4 py-2 text-sm font-semibold text-white"
        >
          Create Plan
        </button>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100">
        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white">
            <tr>
              <th className="text-left px-5 py-4 font-semibold">Plan</th>
              <th className="text-left px-5 py-4 font-semibold">Price</th>
              <th className="text-left px-5 py-4 font-semibold">Perks</th>
              <th className="text-left px-5 py-4 font-semibold">Status</th>
              <th className="text-left px-5 py-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {plans.map((p) => (
              <tr key={p.name} className="border-t border-gray-100">
                <td className="px-5 py-4 font-semibold">{p.name}</td>
                <td className="px-5 py-4">{p.price}</td>
                <td className="px-5 py-4 text-gray-600">{p.perks}</td>
                <td className="px-5 py-4">
                  <span className={p.status === 'Active' ? 'text-green-600 font-semibold' : 'text-gray-500 font-semibold'}>
                    {p.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <button type="button" className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Surface>
  )
}
