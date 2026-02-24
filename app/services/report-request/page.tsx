'use client'
import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, HelpCircle, FileSearch, Phone, Mail, MapPin } from 'lucide-react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const quickLinks = [
  { title: 'Report a Local Concern', description: 'Submit issues about roads, utilities, or neighborhood concerns', icon: AlertTriangle, href: '#' },
  { title: 'Submit Questions', description: 'Ask questions about county services and programs', icon: HelpCircle, href: '#' },
  { title: 'Request for Public Information', description: 'File a public records request', icon: FileSearch, href: '#' },
]

const concerns = [
  {
    title: 'Rising Costs of Business',
    description: 'Meridian County is committed to supporting local businesses. If you are experiencing challenges related to fees, permits, or regulatory costs, please contact our Economic Development office for assistance.',
  },
  {
    title: 'County Beautification Priorities',
    items: ['Garbage and illegal dumping', 'Housing code ordinances', 'Sidewalk maintenance and repair', 'Illegal dumping enforcement', 'Parking violations', 'Graffiti removal', 'Abandoned vehicle removal', 'Overgrown lot cleanup'],
  },
  {
    title: 'Bike Lane Expansion',
    description: 'The county is evaluating bike lane expansion across major corridors. Share your feedback through the Active Transportation Feedback Form to help shape our cycling infrastructure.',
  },
  {
    title: 'Tree Planting Services',
    description: 'Residents can request replacement street trees through the Tree Replacement Request Form. The county plants approved species at no cost to property owners during the fall and spring planting seasons.',
  },
]

export default function ReportRequestPage() {
  return (
    <InnerPageLayout
      title="Report a Concern & Request Information"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Report & Request' },
      ]}
    >
      {/* Intro */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="flex-1">
          <p className="text-lg text-gray-600 mb-8">
            Residents can submit their concerns, questions, and requests for information anytime. We are committed to responding promptly and keeping our community informed.
          </p>

          {/* Quick Links */}
          <div className="space-y-3">
            {quickLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-200 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{link.title}</h3>
                    <p className="text-sm text-gray-500">{link.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="lg:w-96 flex-shrink-0">
          <div className="relative h-80 lg:h-full rounded-xl overflow-hidden">
            <Image src="/images/meridian/conference-meeting.png" alt="Community meeting" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Common Concerns */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Concerns</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {concerns.map((concern) => (
            <div key={concern.title} className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{concern.title}</h3>
              {concern.description && <p className="text-gray-600 text-sm">{concern.description}</p>}
              {concern.items && (
                <ul className="space-y-1.5">
                  {concern.items.map((item) => (
                    <li key={item} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Meridian County Beautification Committee</h2>
        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">407 Apple Lane, New City, NJ 40559</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">(788) 909-7878</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">beautification@meridiancounty.gov</span>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  )
}
