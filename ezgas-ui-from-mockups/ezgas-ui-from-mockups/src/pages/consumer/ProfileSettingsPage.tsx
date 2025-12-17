import Surface from '../../components/Surface'

function TextField({ label, placeholder, defaultValue }: { label: string; placeholder?: string; defaultValue?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3"
        placeholder={placeholder ?? ''}
        defaultValue={defaultValue}
      />
    </div>
  )
}

export default function ProfileSettingsPage() {
  return (
    <Surface className="p-8">
      <h2 className="text-2xl font-semibold">Personal Info</h2>

      <div className="mt-6 rounded-2xl border border-gray-100 bg-white shadow-card overflow-hidden">
        <div className="border-b border-gray-100 px-6 py-4 text-xs font-semibold tracking-wide text-gray-600 text-center">
          ACCOUNT SETTING
        </div>

        <div className="px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-start">
            <div className="h-32 w-32 rounded-full bg-sky-700" />
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextField label="Display name" defaultValue="Kevin" />
            <TextField label="Username" placeholder="Display name" />
            <TextField label="Full Name" defaultValue="Kevin Gilbert" />
            <TextField label="Email" defaultValue="kevin.gilbert@gmail.com" />
            <TextField label="Secondary Email" defaultValue="kevin12345@gmail.com" />
            <TextField label="Phone Number" defaultValue="+1-202-555-0118" />

            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              <TextField label="Country/Region" defaultValue="Bangladesh" />
              <TextField label="States" defaultValue="Dhaka" />
              <TextField label="Zip Code" defaultValue="1207" />
            </div>

            <div className="md:col-span-2">
              <button
                type="button"
                className="rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-6 py-3 text-white font-semibold"
              >
                SAVE CHANGES
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-100 bg-white shadow-card p-6">
          <div className="text-xs font-semibold tracking-wide text-gray-600">BILLING ADDRESS</div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
            <TextField label="First Name" defaultValue="Kevin" />
            <TextField label="Last Name" defaultValue="Gilbert" />
            <div className="md:col-span-2">
              <TextField label="Company Name (Optional)" />
            </div>
            <div className="md:col-span-2">
              <TextField label="Address" defaultValue="Road No. 13/x, House no. 1320/C, Flat No. 5D" />
            </div>
            <TextField label="Country" defaultValue="Nigeria" />
            <TextField label="Region/State" placeholder="Select..." />
            <TextField label="City" defaultValue="Dhaka" />
            <TextField label="Zip Code" defaultValue="1207" />
            <div className="md:col-span-2">
              <TextField label="Email" defaultValue="kevin12345@gmail.com" />
            </div>
            <div className="md:col-span-2">
              <TextField label="Phone Number" defaultValue="+1-202-555-0118" />
            </div>
          </div>

          <button
            type="button"
            className="mt-6 rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-6 py-3 text-white font-semibold"
          >
            SAVE CHANGES
          </button>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white shadow-card p-6">
          <div className="text-xs font-semibold tracking-wide text-gray-600">SHIPPING ADDRESS</div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
            <TextField label="First Name" defaultValue="Kevin" />
            <TextField label="Last Name" defaultValue="Gilbert" />
            <div className="md:col-span-2">
              <TextField label="Company Name (Optional)" />
            </div>
            <div className="md:col-span-2">
              <TextField label="Address" defaultValue="Road No. 13/x, House no. 1320/C, Flat No. 5D" />
            </div>
            <TextField label="Country" defaultValue="Nigeria" />
            <TextField label="Region/State" placeholder="Select..." />
            <TextField label="City" defaultValue="Dhaka" />
            <TextField label="Zip Code" defaultValue="1207" />
            <div className="md:col-span-2">
              <TextField label="Email" defaultValue="kevin12345@gmail.com" />
            </div>
            <div className="md:col-span-2">
              <TextField label="Phone Number" defaultValue="+1-202-555-0118" />
            </div>
          </div>

          <button
            type="button"
            className="mt-6 rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-6 py-3 text-white font-semibold"
          >
            SAVE CHANGES
          </button>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-gray-100 bg-white shadow-card p-6">
        <div className="text-xs font-semibold tracking-wide text-gray-600">CHANGE PASSWORD</div>

        <div className="mt-4 grid grid-cols-1 gap-5">
          <TextField label="Current Password" placeholder="••••••••" />
          <TextField label="New Password" placeholder="8+ characters" />
          <TextField label="Confirm Password" placeholder="••••••••" />
        </div>

        <button
          type="button"
          className="mt-6 rounded-xl bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-6 py-3 text-white font-semibold"
        >
          CHANGE PASSWORD
        </button>
      </div>
    </Surface>
  )
}
