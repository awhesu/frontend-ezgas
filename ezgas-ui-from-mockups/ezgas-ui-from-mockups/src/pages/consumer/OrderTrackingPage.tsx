import Surface from '../../components/Surface'
import StatusPill from '../../components/StatusPill'
import { orders } from '../../data/mock'

export default function OrderTrackingPage() {
  return (
    <Surface className="p-8">
      <h1 className="text-3xl font-extrabold">Track Order</h1>
      <p className="mt-3 text-gray-600">
        To track your order please enter your order ID in the input field below and press the “Track Order” button.
        This was given to you on your receipt and in the confirmation email you should have received.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium text-gray-700">Order ID</label>
          <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="ID..." />
          <div className="mt-2 text-xs text-gray-500">Order ID that we sent to you in your email address.</div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Billing Email</label>
          <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="Email address" />
        </div>
      </div>

      <button
        type="button"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-6 py-3 font-semibold text-white"
      >
        TRACK ORDER
        <span aria-hidden>→</span>
      </button>

      <h2 className="mt-10 text-xl font-semibold">List of Active Orders</h2>

      <div className="mt-4 overflow-hidden rounded-2xl border border-gray-100">
        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white">
            <tr>
              <th className="text-left px-5 py-4 font-semibold">Order ID</th>
              <th className="text-left px-5 py-4 font-semibold">Service</th>
              <th className="text-left px-5 py-4 font-semibold">Status</th>
              <th className="text-left px-5 py-4 font-semibold">Price</th>
              <th className="text-left px-5 py-4 font-semibold">Order Placed</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Surface>
  )
}
