import Surface from '../../components/Surface'

export default function PaymentsPage() {
  return (
    <Surface className="p-8">
      <h2 className="text-2xl font-semibold">Current Payment Method</h2>

      <div className="mt-6 rounded-2xl border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-white">
          <div className="flex items-center gap-4">
            <div className="h-7 w-20 rounded bg-sky-50 flex items-center justify-center text-xs font-bold text-sky-700">paystack</div>
            <div className="text-sm text-gray-600">4855 **** **** ****</div>
          </div>
          <div className="text-sm text-gray-500">04/24</div>
          <div className="text-sm text-gray-700">Vako Shvili</div>
          <button type="button" className="h-9 w-9 rounded-lg border border-gray-200 bg-white">✎</button>
        </div>
      </div>

      <h3 className="mt-8 text-xl font-semibold">Add Payment Method</h3>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="Name on card" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Card Number</label>
          <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="•••• •••• •••• ••••" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">MM / YY</label>
          <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="MM / YY" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">CVC</label>
          <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="Security Code" />
        </div>
      </div>

      <label className="mt-5 flex items-center gap-3 text-sm text-gray-600">
        <input type="checkbox" className="h-4 w-4 accent-[var(--brand-to)]" defaultChecked />
        Remember this card, save it on my card list
      </label>

      <button
        type="button"
        className="mt-6 rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-6 py-3 font-semibold text-white"
      >
        Update Payment Method
      </button>
    </Surface>
  )
}
