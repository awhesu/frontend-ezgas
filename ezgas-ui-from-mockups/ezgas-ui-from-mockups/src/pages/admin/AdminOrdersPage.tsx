import Surface from '../../components/Surface'
import StatusPill from '../../components/StatusPill'
import { orders } from '../../data/mock'

export default function AdminOrdersPage() {
  const rows = orders.concat(orders).concat(orders).map((o, idx) => ({
    ...o,
    id: `${o.id}-${idx}`,
    customer: ['Kevin Gilbert', 'Cody Fisher', 'Esther Howard'][idx % 3],
    vendor: ['Selaï Gas Station', 'Lagos LPG Hub'][idx % 2],
  }))

  return (
    <Surface className="p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Order Management</h2>
        <button type="button" className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
          Export ▾
        </button>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100">
        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white">
            <tr>
              <th className="text-left px-5 py-4 font-semibold">Order ID</th>
              <th className="text-left px-5 py-4 font-semibold">Customer</th>
              <th className="text-left px-5 py-4 font-semibold">Vendor</th>
              <th className="text-left px-5 py-4 font-semibold">Service</th>
              <th className="text-left px-5 py-4 font-semibold">Status</th>
              <th className="text-left px-5 py-4 font-semibold">Amount</th>
              <th className="text-left px-5 py-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {rows.slice(0, 10).map((r) => (
              <tr key={r.id} className="border-t border-gray-100">
                <td className="px-5 py-4 font-medium">{r.id.replace(/-\d+$/, '')}</td>
                <td className="px-5 py-4">{r.customer}</td>
                <td className="px-5 py-4">{r.vendor}</td>
                <td className="px-5 py-4 text-gray-700">{r.service}</td>
                <td className="px-5 py-4"><StatusPill status={r.status} /></td>
                <td className="px-5 py-4">₦{r.price.toFixed(2)}</td>
                <td className="px-5 py-4">
                  <button type="button" className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
                    Open
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
