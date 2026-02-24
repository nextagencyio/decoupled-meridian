'use client'
import Link from 'next/link'
import { ArrowRight, MessageCircle, HelpCircle, Briefcase, Shield, CreditCard, FileText, Home, Droplets } from 'lucide-react'
import InnerPageLayout from '../components/sections/InnerPageLayout'

const quickLinks = [
  {
    title: 'Contact Meridian',
    description: 'Find phone numbers, email addresses, and office locations for county departments.',
    href: '/residents/contact',
    icon: MessageCircle,
  },
  {
    title: 'FAQs',
    description: 'Answers to the most commonly asked questions about county services and procedures.',
    href: '/residents/faqs',
    icon: HelpCircle,
  },
  {
    title: 'Jobs',
    description: 'View current job openings and career opportunities with Meridian County government.',
    href: '/residents/jobs',
    icon: Briefcase,
  },
  {
    title: 'Public Safety',
    description: 'Emergency contacts, safety resources, and community policing information.',
    href: '/residents/public-safety',
    icon: Shield,
  },
]

const popularServices = [
  { title: 'Pay Property Tax', href: '/services/pay', icon: CreditCard },
  { title: 'Building Permits', href: '/services/building-permit', icon: FileText },
  { title: 'Water Bill', href: '/services/pay', icon: Droplets },
  { title: 'Report an Issue', href: '/services/report-request', icon: Home },
]

export default function ResidentsPage() {
  return (
    <InnerPageLayout
      title="Residents"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Residents' },
      ]}
      heroImage="/images/meridian/hero-tree.png"
    >
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        Whether you are a long-time Meridian County resident or new to the area, find the resources and information you need to connect with your community.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {quickLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.title}
              href={link.href}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h2>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </Link>
          )
        })}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularServices.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-medium text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">New to Meridian County?</h2>
            <p className="text-blue-100">
              Welcome! Download our new resident guide to learn about services, utilities, schools, and recreation in your new community.
            </p>
          </div>
          <button className="flex-shrink-0 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            Download Guide
          </button>
        </div>
      </div>
    </InnerPageLayout>
  )
}
