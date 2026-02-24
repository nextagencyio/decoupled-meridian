'use client'
import { Building2, Shield, DollarSign, Trees, Wrench, Droplets, Phone } from 'lucide-react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const departments = [
  {
    name: 'Administration',
    description: 'County management, human resources, and administrative services for all government operations.',
    phone: '(555) 100-1000',
    icon: Building2,
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
  },
  {
    name: 'Building & Safety',
    description: 'Building permits, inspections, code enforcement, and zoning compliance services.',
    phone: '(555) 100-2000',
    icon: Shield,
    hours: 'Mon-Fri: 7:30 AM - 4:30 PM',
  },
  {
    name: 'Finance',
    description: 'County budgeting, accounts payable, tax collection, and financial reporting.',
    phone: '(555) 100-3000',
    icon: DollarSign,
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
  },
  {
    name: 'Parks & Recreation',
    description: 'Public parks, community centers, recreational programs, and event reservations.',
    phone: '(555) 100-4000',
    icon: Trees,
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
  },
  {
    name: 'Public Works',
    description: 'Road maintenance, infrastructure projects, waste management, and capital improvements.',
    phone: '(555) 100-5000',
    icon: Wrench,
    hours: 'Mon-Fri: 7:00 AM - 4:00 PM',
  },
  {
    name: 'Water Authority',
    description: 'Water treatment, distribution, conservation programs, and utility billing services.',
    phone: '(555) 100-6000',
    icon: Droplets,
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
  },
]

export default function DepartmentsPage() {
  return (
    <InnerPageLayout
      title="County Departments"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Government', href: '/government' },
        { label: 'County Departments' },
      ]}
      heroImage="/images/meridian/conference-meeting.png"
    >
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        Meridian County government is organized into departments to efficiently serve our residents. Find the department you need below.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => {
          const Icon = dept.icon
          return (
            <div
              key={dept.name}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{dept.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{dept.description}</p>
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 font-medium">{dept.phone}</span>
                </div>
                <p className="text-xs text-gray-400">{dept.hours}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Can&apos;t find what you need?</h2>
        <p className="text-gray-600 mb-4">
          Call the main county switchboard and we will connect you with the right department.
        </p>
        <p className="text-2xl font-bold text-blue-600">(555) 100-0000</p>
      </div>
    </InnerPageLayout>
  )
}
