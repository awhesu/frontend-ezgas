import Surface from '../../components/Surface'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const chartData = [
  { month: 'Jan', vendor: 50, customer: 40 },
  { month: 'Feb', vendor: 670, customer: 520 },
  { month: 'Mar', vendor: 300, customer: 110 },
  { month: 'Apr', vendor: 260, customer: 700 },
  { month: 'May', vendor: 280, customer: 180 },
  { month: 'Jun', vendor: 320, customer: 200 },
  { month: 'Jul', vendor: 260, customer: 200 },
  { month: 'Aug', vendor: 230, customer: 320 },
  { month: 'Sep', vendor: 500, customer: 300 },
  { month: 'Oct', vendor: 180, customer: 520 },
  { month: 'Nov', vendor: 320, customer: 620 },
  { month: 'Dec', vendor: 80, customer: 760 },
]

export default function AdminDashboardPage() {
  return (
    <Surface className="p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Insight Overview</h2>
        <button type="button" className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
          This week ▾
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-sky-50 border border-gray-100 shadow-card p-6">
          <div className="text-5xl font-extrabold">154</div>
          <div className="mt-2 text-sm text-gray-600">Real-time count of active Customers</div>
          <div className="mt-3 inline-flex rounded-lg bg-white/60 px-3 py-1 text-xs text-green-700">↑ 37.8% this week</div>
        </div>
        <div className="rounded-2xl bg-orange-50 border border-gray-100 shadow-card p-6">
          <div className="text-5xl font-extrabold">05</div>
          <div className="mt-2 text-sm text-gray-600">Real-time count of active Vendor</div>
          <div className="mt-3 inline-flex rounded-lg bg-white/60 px-3 py-1 text-xs text-green-700">↑ 37.8% this week</div>
        </div>
        <div className="rounded-2xl bg-emerald-50 border border-gray-100 shadow-card p-6">
          <div className="text-5xl font-extrabold">₦1199.00</div>
          <div className="mt-2 text-sm text-gray-600">Total Revenue</div>
          <div className="mt-3 inline-flex rounded-lg bg-white/60 px-3 py-1 text-xs text-red-700">↓ 37.8% this week</div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-gray-100 bg-white shadow-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">User Metrics</div>
            <div className="mt-1 text-xs text-gray-500">Vendor vs Customer</div>
          </div>
          <button type="button" className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
            This week ▾
          </button>
        </div>

        <div className="mt-6 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Line type="monotone" dataKey="vendor" stroke="#f77f2a" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="customer" stroke="#1d4ed8" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Surface>
  )
}
