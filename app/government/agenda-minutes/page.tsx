'use client'
import { FileText, Download, Calendar } from 'lucide-react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const meetings = [
  {
    name: 'Board of Supervisors Regular Meeting',
    date: 'March 4, 2026',
    time: '9:00 AM',
    location: 'Board Chambers, 123 Main St',
    agendaAvailable: true,
    minutesAvailable: false,
  },
  {
    name: 'Planning Commission Meeting',
    date: 'February 27, 2026',
    time: '6:00 PM',
    location: 'Board Chambers, 123 Main St',
    agendaAvailable: true,
    minutesAvailable: false,
  },
  {
    name: 'Board of Supervisors Regular Meeting',
    date: 'February 18, 2026',
    time: '9:00 AM',
    location: 'Board Chambers, 123 Main St',
    agendaAvailable: true,
    minutesAvailable: true,
  },
  {
    name: 'Parks & Recreation Advisory Board',
    date: 'February 12, 2026',
    time: '3:00 PM',
    location: 'County Administration Building, Room 204',
    agendaAvailable: true,
    minutesAvailable: true,
  },
  {
    name: 'Board of Supervisors Regular Meeting',
    date: 'February 4, 2026',
    time: '9:00 AM',
    location: 'Board Chambers, 123 Main St',
    agendaAvailable: true,
    minutesAvailable: true,
  },
  {
    name: 'Budget & Finance Committee',
    date: 'January 28, 2026',
    time: '2:00 PM',
    location: 'County Administration Building, Room 310',
    agendaAvailable: true,
    minutesAvailable: true,
  },
  {
    name: 'Board of Supervisors Regular Meeting',
    date: 'January 21, 2026',
    time: '9:00 AM',
    location: 'Board Chambers, 123 Main St',
    agendaAvailable: true,
    minutesAvailable: true,
  },
]

export default function AgendaMinutesPage() {
  return (
    <InnerPageLayout
      title="Agenda & Minutes"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Government', href: '/government' },
        { label: 'Agenda & Minutes' },
      ]}
      heroImage="/images/meridian/meeting.png"
    >
      <p className="text-lg text-gray-600 max-w-3xl mb-8">
        Access agendas and minutes for Meridian County board and commission meetings. Agendas are posted at least 72 hours before each meeting.
      </p>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Meeting
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Documents
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {meetings.map((meeting, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-900 text-sm">{meeting.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <div>
                        <div>{meeting.date}</div>
                        <div className="text-gray-400">{meeting.time}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {meeting.location}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {meeting.agendaAvailable && (
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors">
                          <Download className="w-3 h-3" />
                          Agenda
                        </button>
                      )}
                      {meeting.minutesAvailable && (
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-green-700 bg-green-50 rounded-md hover:bg-green-100 transition-colors">
                          <Download className="w-3 h-3" />
                          Minutes
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-xl">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">Meeting Notifications</h2>
        <p className="text-sm text-blue-700 mb-4">
          Subscribe to receive email notifications when new agendas and minutes are posted.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Subscribe to Updates
        </button>
      </div>
    </InnerPageLayout>
  )
}
