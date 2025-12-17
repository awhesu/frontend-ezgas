import Surface from '../../components/Surface'

const services = [
  { name: 'Cylinder Refilling', type: 'Domestic/Commercial/Industrial', price: '₦1,440 / kg', status: 'Active' },
  { name: 'Bulk LPG Supply', type: 'Industrial', price: 'Custom', status: 'Active' },
  { name: 'Installation Services', type: 'Home/Commercial', price: 'From ₦5,000', status: 'Active' },
  { name: 'LPG Consultancy', type: 'Business', price: 'Custom', status: 'Inactive' },
]

export default function AdminServicesPage() {
  return (
    <Surface className="p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Service Management</h2>
        <button
          type="button"
          className="rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-4 py-2 text-sm font-semibold text-white"
        >
          Add Service
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.name} className="rounded-2xl border border-gray-100 bg-white shadow-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold">{s.name}</div>
                <div className="mt-1 text-sm text-gray-600">{s.type}</div>
              </div>
              <span className={s.status === 'Active' ? 'text-green-600 font-semibold' : 'text-gray-500 font-semibold'}>
                {s.status}
              </span>
            </div>
            <div className="mt-4 text-sm">
              <span className="text-gray-500">Price:</span> <span className="font-semibold">{s.price}</span>
            </div>
            <div className="mt-6 flex gap-3">
              <button type="button" className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold">Edit</button>
              <button type="button" className="rounded-xl bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">View</button>
            </div>
          </div>
        ))}
      </div>
    </Surface>
  )
}
