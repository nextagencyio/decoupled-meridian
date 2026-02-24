'use client'
import { Clock, MapPin, CalendarDays } from 'lucide-react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const events = [
  {
    title: 'Community Town Hall Meeting',
    date: 'March 5, 2026',
    month: 'MAR',
    day: '5',
    time: '6:00 PM - 8:00 PM',
    location: 'Board Chambers, 123 Main St',
    description: 'Join the Board of Supervisors for a community town hall on the proposed transit expansion plan. Public comment period included.',
    category: 'Government',
  },
  {
    title: 'Spring Job Fair',
    date: 'March 12, 2026',
    month: 'MAR',
    day: '12',
    time: '10:00 AM - 3:00 PM',
    location: 'County Fairgrounds, Building A',
    description: 'Over 50 employers will be hiring on-site. Bring your resume and dress professionally. Free resume workshops available.',
    category: 'Community',
  },
  {
    title: 'Parks Cleanup Day',
    date: 'March 15, 2026',
    month: 'MAR',
    day: '15',
    time: '8:00 AM - 12:00 PM',
    location: 'Meridian Regional Park',
    description: 'Volunteer to help keep our parks beautiful. Supplies provided. Community service hours available for students.',
    category: 'Environment',
  },
  {
    title: 'Small Business Workshop: Getting Started',
    date: 'March 20, 2026',
    month: 'MAR',
    day: '20',
    time: '9:00 AM - 12:00 PM',
    location: 'County Library, Room B',
    description: 'Free workshop covering business licensing, permits, taxes, and resources available to Meridian County entrepreneurs.',
    category: 'Business',
  },
  {
    title: 'Board of Supervisors Regular Meeting',
    date: 'April 1, 2026',
    month: 'APR',
    day: '1',
    time: '9:00 AM - 12:00 PM',
    location: 'Board Chambers, 123 Main St',
    description: 'Regular meeting of the Board of Supervisors. View the agenda at meridiancounty.gov/agenda.',
    category: 'Government',
  },
  {
    title: 'Easter Egg Hunt',
    date: 'April 4, 2026',
    month: 'APR',
    day: '4',
    time: '10:00 AM - 1:00 PM',
    location: 'Lakewood Park',
    description: 'Annual county Easter egg hunt for children ages 2-12. Free admission with activities, face painting, and prizes.',
    category: 'Community',
  },
  {
    title: 'Water Conservation Workshop',
    date: 'April 10, 2026',
    month: 'APR',
    day: '10',
    time: '6:00 PM - 7:30 PM',
    location: 'Water Authority Building, Training Room',
    description: 'Learn about drought-tolerant landscaping, rebate programs, and how to reduce your household water use.',
    category: 'Environment',
  },
  {
    title: 'Senior Health Fair',
    date: 'April 18, 2026',
    month: 'APR',
    day: '18',
    time: '9:00 AM - 2:00 PM',
    location: 'Northridge Community Center',
    description: 'Free health screenings, flu shots, Medicare information, and senior service resources.',
    category: 'Health',
  },
]

const categoryColors: Record<string, string> = {
  Government: 'bg-blue-50 text-blue-700',
  Community: 'bg-green-50 text-green-700',
  Environment: 'bg-emerald-50 text-emerald-700',
  Business: 'bg-purple-50 text-purple-700',
  Health: 'bg-red-50 text-red-700',
}

export default function EventsPage() {
  return (
    <InnerPageLayout
      title="Events"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'News & Events', href: '/news-events' },
        { label: 'Events' },
      ]}
      heroImage="/images/meridian/park-bench.png"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <p className="text-lg text-gray-600 mb-8">
            Find upcoming community events, public meetings, and activities throughout Meridian County.
          </p>

          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.title + event.date}
                className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-20 rounded-xl bg-blue-600 text-white flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium uppercase">{event.month}</span>
                  <span className="text-2xl font-bold leading-tight">{event.day}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{event.title}</h3>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full flex-shrink-0 ${categoryColors[event.category] || 'bg-gray-50 text-gray-700'}`}>
                      {event.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-72 space-y-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <CalendarDays className="w-5 h-5 text-blue-600" />
              <h2 className="font-semibold text-blue-900">Add to Calendar</h2>
            </div>
            <p className="text-sm text-blue-700 mb-4">
              Subscribe to the Meridian County events calendar to stay up to date.
            </p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Submit an Event</h3>
            <p className="text-sm text-gray-600 mb-4">
              Have a community event you would like listed? Submit it for review.
            </p>
            <button className="w-full px-4 py-2 bg-white text-blue-600 text-sm font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
              Submit Event
            </button>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  )
}
