'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FileText, Zap, ArrowUpSquare, Flame, Search, Gauge } from 'lucide-react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const steps = [
  {
    number: 1,
    title: 'Know the License Requirements',
    description: 'Review Meridian County building codes and determine which permits are required for your project. Residential and commercial projects have different requirements.',
  },
  {
    number: 2,
    title: 'Meet Experience & Education Requirements',
    description: 'Contractors must hold a valid state license and provide proof of liability insurance. Owner-builders must complete a building safety course.',
  },
  {
    number: 3,
    title: 'Obtain a Surety Bond',
    description: 'A surety bond is required for commercial projects over $25,000. Bond amounts vary based on project scope and contractor classification.',
  },
  {
    number: 4,
    title: 'Submit the Application',
    description: 'Complete the permit application online or in person at the Building & Safety counter. Include site plans, construction drawings, and applicable fees.',
  },
]

const quickLinks = [
  { title: 'Building Permits', description: 'Residential & commercial building permits', icon: FileText, href: '#' },
  { title: 'Electric Permits', description: 'Electrical installation and upgrade permits', icon: Zap, href: '#' },
  { title: 'Elevator Safety', description: 'Elevator and escalator inspection permits', icon: ArrowUpSquare, href: '#' },
  { title: 'Fire Burning', description: 'Open burn permits and fire safety compliance', icon: Flame, href: '#' },
  { title: 'Inspections', description: 'Schedule and track building inspections', icon: Search, href: '#' },
  { title: 'Gas Inspections', description: 'Gas line installation and safety checks', icon: Gauge, href: '#' },
]

export default function BuildingPermitPage() {
  return (
    <InnerPageLayout
      title="Applying for a Building Permit"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Building Permit' },
      ]}
    >
      {/* Steps Section */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="flex-1">
          <p className="text-lg text-gray-600 mb-8">
            Follow these steps to apply for a building permit in Meridian County. Most permits are reviewed within 10-15 business days.
          </p>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Apply Online
            </button>
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
              Download Application (PDF)
            </button>
          </div>
        </div>

        <div className="lg:w-96 flex-shrink-0">
          <div className="relative h-80 lg:h-full rounded-xl overflow-hidden">
            <Image
              src="/images/meridian/laptop-person.jpg"
              alt="Person applying for a building permit online"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.title}
                href={link.href}
                className="group flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-xs text-gray-500 truncate">{link.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </Link>
            )
          })}
        </div>
      </div>
    </InnerPageLayout>
  )
}
