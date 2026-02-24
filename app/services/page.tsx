'use client'
import Link from 'next/link'
import { ArrowRight, ClipboardList, CreditCard, PawPrint, FileCheck, AlertTriangle, Briefcase } from 'lucide-react'
import InnerPageLayout from '../components/sections/InnerPageLayout'

const services = [
  {
    title: 'Building Permit',
    description: 'Apply for building, electrical, plumbing, and mechanical permits for residential and commercial projects.',
    href: '/services/building-permit',
    icon: ClipboardList,
  },
  {
    title: 'Payments Portal',
    description: 'Pay property taxes, water bills, permit fees, court fines, and other county charges online.',
    href: '/services/pay',
    icon: CreditCard,
  },
  {
    title: 'Animal Center',
    description: 'Pet adoption, licensing, lost-and-found pets, and animal control services.',
    href: '/services/animal-center',
    icon: PawPrint,
  },
  {
    title: 'Register',
    description: 'Voter registration, vital records, marriage licenses, and property recordings.',
    href: '/services/register',
    icon: FileCheck,
  },
  {
    title: 'Report & Request',
    description: 'Report potholes, streetlight outages, code violations, and submit service requests.',
    href: '/services/report-request',
    icon: AlertTriangle,
  },
  {
    title: 'Starting a Business',
    description: 'Business licenses, zoning verification, and resources for new business owners.',
    href: '/services/starting-business',
    icon: Briefcase,
  },
]

export default function ServicesPage() {
  return (
    <InnerPageLayout
      title="Services"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services' },
      ]}
    >
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        Meridian County offers a wide range of services to residents and businesses. Find the service you need below or use the search above.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          )
        })}
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Need help finding a service?</h2>
            <p className="text-blue-100">
              Call the Meridian County Customer Service Center for assistance with any county service.
            </p>
          </div>
          <a
            href="tel:5551000000"
            className="flex-shrink-0 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            (555) 100-0000
          </a>
        </div>
      </div>
    </InnerPageLayout>
  )
}
