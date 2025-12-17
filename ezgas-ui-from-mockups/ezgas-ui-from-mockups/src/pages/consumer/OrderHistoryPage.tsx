import Surface from '../../components/Surface'
import StatusPill from '../../components/StatusPill'
import { orders } from '../../data/mock'

export default function OrderHistoryPage() {
  return (
    <Surface className="p-8">
      <h2 className="text-2xl font-semibold">Order History</h2>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 rounded-2xl border border-gray-100 bg-white shadow-card">
          <div className="border-b border-gray-100 px-6 py-4 text-xs font-semibold tracking-wide text-gray-600">
            ACCOUNT INFO
          </div>
          <div className="px-6 py-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-200" />
              <div>
                <div className="font-semibold">Kevin Gilbert</div>
                <div className="text-sm text-gray-500">Dhaka -1207, Bangladesh</div>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <div>Email: kevin.gilbert@gmail.com</div>
              <div>Sec Email: kevin12345@gmail.com</div>
              <div>Phone: +1-202-555-0118</div>
            </div>

            <button
              type="button"
              className="mt-6 rounded-xl border border-[var(--brand-to)]/60 bg-white px-5 py-2 text-sm font-semibold text-[var(--brand-to)]"
            >
              EDIT ACCOUNT
            </button>
          </div>
        </div>

        <div className="lg:col-span-1 rounded-2xl border border-gray-100 bg-white shadow-card">
          <div className="border-b border-gray-100 px-6 py-4 text-xs font-semibold tracking-wide text-gray-600">
            BILLING ADDRESS
          </div>
          <div className="px-6 py-6 text-sm text-gray-600 space-y-2">
            <div className="font-semibold text-gray-900">Kevin Gilbert</div>
            <div>East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka -1200, Bangladesh</div>
            <div>Phone Number: +1-202-555-0118</div>
            <div>Email: kevin.gilbert@gmail.com</div>

            <button
              type="button"
              className="mt-4 rounded-xl border border-[var(--brand-to)]/60 bg-white px-5 py-2 text-sm font-semibold text-[var(--brand-to)]"
            >
              EDIT ADDRESS
            </button>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-4">
          <div className="rounded-2xl border border-gray-100 bg-sky-50 shadow-card p-6">
            <div className="text-3xl font-extrabold">154</div>
            <div className="text-sm text-gray-600">Total Orders</div>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-orange-50 shadow-card p-6">
            <div className="text-3xl font-extrabold">05</div>
            <div className="text-sm text-gray-600">Pending Orders</div>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-emerald-50 shadow-card p-6">
            <div className="text-3xl font-extrabold">149</div>
            <div className="text-sm text-gray-600">Completed Orders</div>
          </div>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100">
        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white">
            <tr>
              <th className="text-left px-5 py-4 font-semibold">Order ID</th>
              <th className="text-left px-5 py-4 font-semibold">Service</th>
              <th className="text-left px-5 py-4 font-semibold">Status</th>
              <th className="text-left px-5 py-4 font-semibold">Price</th>
              <th className="text-left px-5 py-4 font-semibold">Order Placed</th>
              <th className="text-left px-5 py-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {orders.concat(orders).map((o, idx) => (
              <tr key={idx} className="border-t border-gray-100">
                <td className="px-5 py-4 font-medium">{o.id}</td>
                <td className="px-5 py-4">{o.service}</td>
                <td className="px-5 py-4"><StatusPill status={o.status} /></td>
                <td className="px-5 py-4">₦{o.price.toFixed(2)}</td>
                <td className="px-5 py-4 text-gray-600">{o.placedAt}</td>
                <td className="px-5 py-4">
                  <button type="button" className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
                    View Order Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
        <div>Showing 1 to 10 of 97 results</div>
        <div className="flex items-center gap-2">
          {['1', '2', '3', '4', '5', '…', '10'].map((p) => (
            <button
              key={p}
              type="button"
              className={p === '1' ? 'h-9 w-9 rounded-lg bg-[var(--brand-from)] text-white font-semibold' : 'h-9 w-9 rounded-lg border border-gray-200 bg-white'}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </Surface>
  )
}
