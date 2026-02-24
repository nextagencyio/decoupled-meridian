'use client'
import Image from 'next/image'
import { Phone, Shield, Flame, AlertTriangle, Radio, Heart, ArrowRight } from 'lucide-react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const emergencyContacts = [
  { label: 'Emergency (Police/Fire/Medical)', number: '911', highlight: true },
  { label: 'Non-Emergency Police', number: '(555) 100-9000', highlight: false },
  { label: 'Non-Emergency Fire', number: '(555) 100-9100', highlight: false },
  { label: 'Animal Control', number: '(555) 100-9200', highlight: false },
  { label: 'Poison Control Center', number: '(800) 222-1222', highlight: false },
  { label: 'Suicide & Crisis Lifeline', number: '988', highlight: false },
]

const safetyResources = [
  {
    title: 'Sheriff Department',
    description: 'Law enforcement services including patrol, investigations, court security, and community policing programs.',
    icon: Shield,
    image: '/images/meridian/law-enforcement.jpeg',
  },
  {
    title: 'Fire Department',
    description: 'Fire suppression, emergency medical services, hazardous materials response, and fire prevention education.',
    icon: Flame,
    image: '/images/meridian/featured-photo.png',
  },
  {
    title: 'Emergency Management',
    description: 'Disaster preparedness, emergency alerts, evacuation planning, and community resilience programs.',
    icon: AlertTriangle,
    image: '/images/meridian/hero-bg.png',
  },
]

const programs = [
  {
    title: 'Neighborhood Watch',
    description: 'Join or start a Neighborhood Watch group in your community. Training and resources provided by the Sheriff Department.',
    icon: Radio,
  },
  {
    title: 'Community Emergency Response Team (CERT)',
    description: 'Free 20-hour training program that prepares volunteers to assist their communities during disasters.',
    icon: Heart,
  },
  {
    title: 'Emergency Alert System',
    description: 'Sign up for Meridian County emergency notifications via text, email, and phone call.',
    icon: AlertTriangle,
  },
]

export default function PublicSafetyPage() {
  return (
    <InnerPageLayout
      title="Public Safety"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Residents', href: '/residents' },
        { label: 'Public Safety' },
      ]}
      heroImage="/images/meridian/law-enforcement.jpeg"
    >
      {/* Emergency Contacts */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contacts</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {emergencyContacts.map((contact) => (
            <a
              key={contact.label}
              href={`tel:${contact.number.replace(/[^0-9]/g, '')}`}
              className={`flex items-center gap-4 rounded-xl p-5 transition-shadow hover:shadow-md ${
                contact.highlight
                  ? 'bg-red-600 text-white'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <Phone className={`w-5 h-5 flex-shrink-0 ${contact.highlight ? 'text-red-200' : 'text-blue-600'}`} />
              <div>
                <p className={`text-sm ${contact.highlight ? 'text-red-100' : 'text-gray-500'}`}>
                  {contact.label}
                </p>
                <p className={`text-lg font-bold ${contact.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {contact.number}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Safety Agencies */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety Agencies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {safetyResources.map((resource) => {
            const Icon = resource.icon
            return (
              <div
                key={resource.title}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-9 h-9 rounded-lg bg-white/90 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Community Programs */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Community Safety Programs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <div
                key={program.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{program.description}</p>
                <button className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Emergency Preparedness */}
      <div className="bg-blue-50 rounded-xl p-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">Are You Prepared?</h2>
        <p className="text-blue-700 mb-4 max-w-2xl">
          Every household should have an emergency kit with at least 72 hours of supplies including water, food, medications, flashlight, batteries, and important documents. Download the Meridian County Emergency Preparedness Guide to get started.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Download Preparedness Guide
          </button>
          <button className="px-5 py-2.5 bg-white text-blue-600 text-sm font-medium rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
            Sign Up for Emergency Alerts
          </button>
        </div>
      </div>
    </InnerPageLayout>
  )
}
