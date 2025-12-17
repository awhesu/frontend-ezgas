import Surface from '../../components/Surface'

const rows = Array.from({ length: 8 }).map((_, i) => ({
  id: `VEND-${2000 + i}`,
  name: ['Selaï Gas Station', 'Lagos LPG Hub', 'Abuja Refill Pro', 'PortHarcourt Gas'][i % 4],
  email: `vendor${i + 1}@example.com`,
  phone: '+234 800 000 0000',
  verification: i % 2 === 0 ? 'Verified' : 'Pending',
}))

export default function AdminVendorsPage() {
  return (
    <Surface className="p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Vendor Management</h2>
        <button
          type="button"
          className="rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-4 py-2 text-sm font-semibold text-white"
        >
          Add Vendor
        </button>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100">
        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white">
            <tr>
              <th className="text-left px-5 py-4 font-semibold">Vendor ID</th>
              <th className="text-left px-5 py-4 font-semibold">Name</th>
              <th className="text-left px-5 py-4 font-semibold">Email</th>
              <th className="text-left px-5 py-4 font-semibold">Phone</th>
              <th className="text-left px-5 py-4 font-semibold">Verification</th>
              <th className="text-left px-5 py-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-gray-100">
                <td className="px-5 py-4 font-medium">{r.id}</td>
                <td className="px-5 py-4">{r.name}</td>
                <td className="px-5 py-4 text-gray-600">{r.email}</td>
                <td className="px-5 py-4">{r.phone}</td>
                <td className="px-5 py-4">
                  <span
                    className={
                      r.verification === 'Verified'
                        ? 'font-semibold text-green-600'
                        : 'font-semibold text-orange-500'
                    }
                  >
                    {r.verification}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <button
                    className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700"
                    type="button"
                  >
                    View
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
