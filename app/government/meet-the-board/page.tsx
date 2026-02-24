'use client'
import { Mail, Phone, MapPin } from 'lucide-react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const boardMembers = [
  {
    name: 'Margaret Chen',
    title: 'Board Chair',
    district: 'District 1 - Northridge',
    phone: '(555) 100-1001',
    email: 'mchen@meridiancounty.gov',
    bio: 'Supervisor Chen has served Meridian County since 2018. She chairs the Budget & Finance Committee and focuses on infrastructure and education initiatives.',
  },
  {
    name: 'James Whitfield',
    title: 'Vice Chair',
    district: 'District 2 - Lakewood',
    phone: '(555) 100-1002',
    email: 'jwhitfield@meridiancounty.gov',
    bio: 'Supervisor Whitfield brings 20 years of business experience to the board. He chairs the Economic Development Committee.',
  },
  {
    name: 'Rosa Delgado',
    title: 'Supervisor',
    district: 'District 3 - Valley Springs',
    phone: '(555) 100-1003',
    email: 'rdelgado@meridiancounty.gov',
    bio: 'Supervisor Delgado is a lifelong Meridian County resident and former community organizer. She champions parks and public health initiatives.',
  },
  {
    name: 'David Thompson',
    title: 'Supervisor',
    district: 'District 4 - Eastview',
    phone: '(555) 100-1004',
    email: 'dthompson@meridiancounty.gov',
    bio: 'Supervisor Thompson served as a county planning commissioner for eight years before joining the board. He leads transportation and land-use policy.',
  },
  {
    name: 'Patricia Okafor',
    title: 'Supervisor',
    district: 'District 5 - Hillcrest',
    phone: '(555) 100-1005',
    email: 'pokafor@meridiancounty.gov',
    bio: 'Supervisor Okafor is an attorney and former public defender. She focuses on public safety, justice reform, and community engagement.',
  },
]

export default function MeetTheBoardPage() {
  return (
    <InnerPageLayout
      title="Meet the Board of Supervisors"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Government', href: '/government' },
        { label: 'Meet the Board' },
      ]}
      heroImage="/images/meridian/vote-day.png"
    >
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        The Meridian County Board of Supervisors is the governing body of the county. Five members are elected by district to serve four-year terms.
      </p>

      <div className="space-y-6">
        {boardMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h2 className="text-xl font-semibold text-gray-900">{member.name}</h2>
                  <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full w-fit">
                    {member.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{member.district}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {member.phone}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-xl p-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">Board Meeting Schedule</h2>
        <p className="text-blue-700 mb-4">
          The Board of Supervisors meets the first and third Tuesday of each month at 9:00 AM in the Board Chambers at 123 Main Street.
        </p>
        <a
          href="/government/agenda-minutes"
          className="inline-flex px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Agendas & Minutes
        </a>
      </div>
    </InnerPageLayout>
  )
}
