import Surface from '../../components/Surface'

function Field({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" defaultValue={value} />
    </div>
  )
}

export default function AdminSettingsPage() {
  return (
    <Surface className="p-8">
      <h2 className="text-2xl font-semibold">Platform Settings</h2>
      <p className="mt-2 text-sm text-gray-600">UI scaffold only — wire these fields to your real config/feature flag system later.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Support Email" value="support@ezgas.app" />
        <Field label="Support Phone" value="+234 800 000 0000" />
        <Field label="Default Currency" value="NGN" />
        <Field label="Default Country" value="Nigeria" />
        <Field label="Delivery Fee" value="0" />
        <Field label="Tax (%)" value="0" />
      </div>

      <div className="mt-8 flex gap-3">
        <button type="button" className="rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-6 py-3 text-white font-semibold">
          Save
        </button>
        <button type="button" className="rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold">
          Reset
        </button>
      </div>
    </Surface>
  )
}
