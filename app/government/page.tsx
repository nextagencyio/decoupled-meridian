'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, FileText, Gavel, Building2, Users } from 'lucide-react'
import InnerPageLayout from '../components/sections/InnerPageLayout'

const departments = [
  {
    title: 'Agenda & Minutes',
    description: 'Access meeting agendas, minutes, and public records from the Board of Supervisors and county commissions.',
    href: '/government/agenda-minutes',
    icon: FileText,
    image: '/images/meridian/meeting.png',
  },
  {
    title: 'Bids',
    description: 'View current bid opportunities, requests for proposals, and procurement information.',
    href: '/government/bids',
    icon: Gavel,
    image: '/images/meridian/business-meeting.png',
  },
  {
    title: 'Departments',
    description: 'Find contact information and services for all Meridian County government departments.',
    href: '/government/departments',
    icon: Building2,
    image: '/images/meridian/conference-meeting.png',
  },
  {
    title: 'Meet the Board',
    description: 'Learn about the Meridian County Board of Supervisors who represent your district.',
    href: '/government/meet-the-board',
    icon: Users,
    image: '/images/meridian/vote-day.png',
  },
]

export default function GovernmentPage() {
  return (
    <InnerPageLayout
      title="Government"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Government' },
      ]}
    >
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        Meridian County is committed to transparent and accessible government. Explore our departments, review meeting records, and connect with your elected officials.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {departments.map((dept) => {
          const Icon = dept.icon
          return (
            <Link
              key={dept.title}
              href={dept.href}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={dept.image}
                  alt={dept.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {dept.title}
                    </h2>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all mt-2" />
                </div>
                <p className="text-gray-600 text-sm">{dept.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </InnerPageLayout>
  )
}
