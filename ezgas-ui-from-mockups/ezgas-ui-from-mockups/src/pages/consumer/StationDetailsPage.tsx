import { ChevronLeft, Minus, Plus } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Surface from '../../components/Surface'
import { cylinders, stations } from '../../data/mock'
import React from 'react'

type LineItem = {
  label: string
  unitPrice: number
  qty: number
}

function QtyControl({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="inline-flex items-center rounded-xl border border-gray-200 overflow-hidden">
      <button
        type="button"
        className="h-9 w-9 grid place-items-center bg-white hover:bg-gray-50"
        onClick={() => onChange(Math.max(0, value - 1))}
        aria-label="Decrease"
      >
        <Minus size={16} />
      </button>
      <div className="h-9 w-10 grid place-items-center text-sm font-semibold">{String(value).padStart(2, '0')}</div>
      <button
        type="button"
        className="h-9 w-9 grid place-items-center bg-white hover:bg-gray-50"
        onClick={() => onChange(value + 1)}
        aria-label="Increase"
      >
        <Plus size={16} />
      </button>
    </div>
  )
}

export default function StationDetailsPage() {
  const { id } = useParams()
  const station = stations.find((s) => s.id === id) ?? stations[0]

  const [subscription, setSubscription] = React.useState<'one-time' | 'monthly'>('one-time')
  const [items, setItems] = React.useState<LineItem[]>([
    { label: 'Cylinder 3KG', unitPrice: 8640, qty: 2 },
    { label: 'Cylinder 50KG', unitPrice: 144000, qty: 2 },
  ])

  const subTotal = items.reduce((sum, it) => sum + it.unitPrice * it.qty, 0)

  return (
    <Surface className="p-8">
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <Link to="/app/home" className="inline-flex items-center gap-2 hover:text-gray-900">
          <ChevronLeft size={16} />
          Home
        </Link>
        <span className="text-gray-300">/</span>
        <span className="font-medium text-gray-900">{station.name}</span>
      </div>

      <div className="mt-5 rounded-2xl border border-gray-100 overflow-hidden">
        <img src={station.imageUrl} alt={station.name} className="h-56 w-full object-cover" />
        <div className="p-6 bg-white">
          <div className="text-2xl font-semibold">{station.name}</div>
          <div className="mt-2 text-sm text-gray-600">
            {station.distanceKm.toFixed(1)} km · {station.address} · {station.phone}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-lg font-semibold">Subscription</div>
        <div className="mt-3 flex items-center gap-6 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={subscription === 'one-time'}
              onChange={() => setSubscription('one-time')}
              className="accent-[var(--brand-to)]"
            />
            One Time Booking
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={subscription === 'monthly'}
              onChange={() => setSubscription('monthly')}
              className="accent-[var(--brand-to)]"
            />
            Monthly Subscription
          </label>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-gray-100 bg-orange-50 p-6">
          <div className="mx-auto h-28 w-28 rounded-full border-4 border-[var(--brand-to)] overflow-hidden">
            <img src="https://picsum.photos/seed/cyl2/240/240" alt="Cylinder" className="h-full w-full object-cover" />
          </div>
          <div className="mt-4 text-center font-semibold">Cylinder Refilling</div>
          <div className="mt-1 text-center text-xs text-gray-600">Current Price Per KG:</div>
          <div className="mt-2 text-center text-2xl font-extrabold text-[var(--brand-to)]">₦1,440</div>

          <div className="mt-6 flex flex-wrap gap-3">
            {['Domestics', 'Commercial', 'Industrial', 'Monthly Subscription'].map((t, idx) => (
              <button
                key={t}
                type="button"
                className={
                  idx === 0
                    ? 'rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-4 py-2 text-sm font-semibold text-white'
                    : 'rounded-xl border border-[var(--brand-to)]/60 bg-white px-4 py-2 text-sm font-semibold'
                }
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white shadow-card p-6">
          <div className="text-sm font-semibold">Order Summary</div>

          <div className="mt-4 space-y-4">
            {items.map((it, idx) => (
              <div key={it.label} className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">{it.label}</div>
                </div>
                <QtyControl
                  value={it.qty}
                  onChange={(v) =>
                    setItems((prev) => prev.map((p, i) => (i === idx ? { ...p, qty: v } : p)))
                  }
                />
                <div className="text-sm font-semibold">₦{(it.unitPrice * it.qty).toLocaleString()}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-gray-100 pt-4 text-sm">
            <div className="flex items-center justify-between text-gray-600">
              <span>Sub-total</span>
              <span className="font-semibold text-gray-900">₦{subTotal.toLocaleString()}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-gray-600">
              <span>Delivery Charges</span>
              <span className="font-semibold text-gray-900">Free</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-gray-600">
              <span>Tax</span>
              <span className="font-semibold text-gray-900">Free</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold">Total</span>
              <span className="text-lg font-extrabold">₦{subTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="text-lg font-semibold">Select Cylinder Size &amp; Quantity</div>
        <div className="mt-3 flex flex-wrap gap-4">
          {cylinders.map((c) => (
            <label key={c.label} className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked={['3kg', '50kg'].includes(c.label)} className="accent-[var(--brand-to)]" />
              {c.label}
            </label>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-100 bg-white shadow-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="md:col-span-3">
                <label className="text-sm font-medium text-gray-700">Custom</label>
                <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="Enter Custom Size" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Whats your Name?</label>
                <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="Enter full name" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="+0 000-000-0000" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="you@example.com" />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium text-gray-700">Tell us more about your request</label>
              <textarea className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" rows={4} placeholder="Write message here ..." />
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Delivery Date</div>
                <span className="text-xs text-gray-500">Select a slot</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-3">
                {[
                  { label: 'Today', date: 'Oct 203' },
                  { label: 'Tomorrow', date: 'Oct 24' },
                  { label: 'Friday', date: 'Oct 25' },
                  { label: 'Saturday', date: 'Oct 26' },
                  { label: 'Sunday', date: 'Oct 27' },
                  { label: 'Monday', date: 'Oct 28' },
                  { label: 'Tuesday', date: 'Oct 30' },
                ].map((d, idx) => (
                  <button
                    key={d.label}
                    type="button"
                    className={
                      idx === 0
                        ? 'rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-4 py-3 text-white text-xs font-semibold'
                        : 'rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs font-semibold'
                    }
                  >
                    <div>{d.label}</div>
                    <div>{d.date}</div>
                  </button>
                ))}
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" name="slot" defaultChecked className="accent-[var(--brand-to)]" />
                  07:00 PM - 09:00 PM
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="slot" className="accent-[var(--brand-to)]" />
                  09:00 PM - 11:00 PM
                </label>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="flex-1 rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-6 py-3 text-white font-semibold"
                >
                  PROCEED TO CHECKOUT
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-xl border border-[var(--brand-to)]/60 bg-white px-6 py-3 font-semibold text-[var(--brand-to)]"
                >
                  VIEW OTHER SERVICES
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white shadow-card p-6">
            <div className="text-sm font-semibold">Billing Address</div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Address</label>
                <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="Road No. 13/x, House no. 1320/C" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Country</label>
                <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="Nigeria" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Region/State</label>
                <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="Select..." />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">City</label>
                <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="Dhaka" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Zip Code</label>
                <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="1207" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="kevin12345@gmail.com" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="+1-202-555-0118" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Surface>
  )
}
