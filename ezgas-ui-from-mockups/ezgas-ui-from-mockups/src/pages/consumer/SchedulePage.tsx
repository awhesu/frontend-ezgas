import Surface from '../../components/Surface'
import React from 'react'

// FullCalendar matches the old UI mockups well (weekly grid + events)
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function SchedulePage() {
  const [mode, setMode] = React.useState<'weekly' | 'monthly'>('weekly')

  const events = React.useMemo(
    () => [
      {
        title: 'Domestic Gas\nCylinder\nRefilling',
        start: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
        end: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(),
      },
      {
        title: 'Domestic Gas\nCylinder\nRefilling',
        start: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
        end: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(),
      },
    ],
    [],
  )

  return (
    <Surface className="p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Schedule</h2>

        <div className="rounded-xl border border-gray-200 bg-white p-1">
          <button
            type="button"
            onClick={() => setMode('weekly')}
            className={
              mode === 'weekly'
                ? 'rounded-lg px-4 py-2 text-sm font-semibold text-gray-900'
                : 'rounded-lg px-4 py-2 text-sm text-gray-500'
            }
          >
            Weekly
          </button>
          <button
            type="button"
            onClick={() => setMode('monthly')}
            className={
              mode === 'monthly'
                ? 'rounded-lg px-4 py-2 text-sm font-semibold text-[var(--brand-to)]'
                : 'rounded-lg px-4 py-2 text-sm text-gray-500'
            }
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="mt-6">
        <FullCalendar key={mode}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={mode === 'weekly' ? 'timeGridWeek' : 'dayGridMonth'}
          headerToolbar={{
            left: 'prev,next title',
            center: '',
            right: '',
          }}
          height="auto"
          allDaySlot={false}
          slotMinTime="08:00:00"
          slotMaxTime="18:00:00"
          events={events}
        />
      </div>
    </Surface>
  )
}
