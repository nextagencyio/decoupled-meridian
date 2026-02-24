'use client'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Layout, Palette, Shield, Accessibility, DollarSign } from 'lucide-react'
import InnerPageLayout from '../components/sections/InnerPageLayout'

const features = [
  'FAQs and Knowledge Base',
  'Job Listings and Applications',
  'Contact Forms and Directories',
  'Meeting Agendas and Minutes',
  'Procurement Bids',
  'Department Pages',
  'News and Events Calendars',
  'Interactive Maps and Facilities',
  'Payment Portals',
  'Public Safety Resources',
]

const benefits = [
  {
    title: 'Secure & Reliable',
    description: 'Built on enterprise-grade infrastructure with SSL encryption, regular security audits, and 99.9% uptime guarantee.',
    icon: Shield,
  },
  {
    title: 'Fully Accessible',
    description: 'WCAG 2.1 AA compliant out of the box. Screen reader friendly, keyboard navigable, and tested with assistive technologies.',
    icon: Accessibility,
  },
  {
    title: 'Highly Customizable',
    description: 'Over 50 component types and 5+ layout options. Easily adapt colors, typography, and structure to match your brand.',
    icon: Palette,
  },
  {
    title: 'Cost Effective',
    description: 'Agencies using Decoupled.io report significant savings through efficient design workflows and reduced development time.',
    icon: DollarSign,
  },
]

export default function DiscoverMeridianPage() {
  return (
    <InnerPageLayout
      title="Discover Meridian"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Discover Meridian' },
      ]}
      heroImage="/images/meridian/hero-tree.png"
    >
      {/* Intro */}
      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience the Future of Government Websites</h2>
        <p className="text-lg text-gray-600 mb-4">
          Meridian County is a demonstration of what&apos;s possible with the Decoupled.io platform — a secure, accessible, and highly customizable solution for government agencies of all sizes.
        </p>
        <p className="text-gray-600">
          Explore the site to see 50+ component types, 10+ features, and 5+ layout options working together to create an engaging, user-friendly government experience.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-4">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Decoupled.io?</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div key={benefit.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
        <blockquote>
          <p className="text-lg text-gray-700 italic mb-4">
            &ldquo;The Decoupled.io platform has transformed how we serve our residents online. The efficient design workflows and reduced development time have resulted in significant savings for our agency.&rdquo;
          </p>
          <footer className="text-gray-600">
            <strong>— County Program Manager</strong>
          </footer>
        </blockquote>
      </div>
    </InnerPageLayout>
  )
}
