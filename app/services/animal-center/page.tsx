'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ClipboardList, Scale, CreditCard, Dog, Search, Users, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const serviceLinks = [
  { title: 'Pet Registration', description: 'Register your pet with the county', icon: ClipboardList, href: '#' },
  { title: 'Adoption Forms', description: 'Download and complete adoption paperwork', icon: Heart, href: '#' },
  { title: 'Pet Laws & Ordinances', description: 'Review local animal regulations', icon: Scale, href: '#' },
  { title: 'Payment Portal', description: 'Pay fees and fines online', icon: CreditCard, href: '#' },
]

const featureCards = [
  {
    title: 'Adopt a Pet',
    description: 'Browse available dogs, cats, and other animals looking for their forever home. All adopted pets are spayed/neutered, vaccinated, and microchipped.',
    icon: Dog,
  },
  {
    title: 'Lost Pets',
    description: 'Report a lost or found pet, search our database of animals currently in the shelter, and learn tips for reuniting with your companion.',
    icon: Search,
  },
  {
    title: 'Get Involved',
    description: 'Volunteer at the shelter, foster animals in need, or make a donation to support our mission of finding homes for every animal.',
    icon: Users,
  },
]

const hours = [
  { day: 'Sunday', hours: 'Closed' },
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: '12:00 PM – 6:00 PM' },
  { day: 'Wednesday', hours: '12:00 PM – 6:00 PM' },
  { day: 'Thursday', hours: '12:00 PM – 6:00 PM' },
  { day: 'Friday', hours: '12:00 PM – 6:00 PM' },
  { day: 'Saturday', hours: '12:00 PM – 6:00 PM' },
]

const faqs = [
  { question: 'What is the adoption process?', answer: 'Visit the shelter during open hours, meet available animals, and complete an adoption application. Our staff will review your application and conduct a brief interview. Most adoptions are completed the same day.' },
  { question: 'What are the adoption fees?', answer: 'Adoption fees range from $50 to $150 depending on the animal. Fees include spay/neuter surgery, vaccinations, microchipping, and a health examination.' },
  { question: 'What happens when a stray animal is found?', answer: 'Stray animals are held for a minimum of 5 business days to allow owners to reclaim them. After the hold period, animals are evaluated for adoption or transfer to partner rescue organizations.' },
  { question: 'How long does the adoption process take?', answer: 'Most adoptions are completed within 1-2 hours. This includes time to meet the animal, complete paperwork, and receive post-adoption guidance from our staff.' },
]

export default function AnimalCenterPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <InnerPageLayout
      title="Meridian County Animal Center"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Animal Center' },
      ]}
    >
      {/* Intro */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="flex-1">
          <p className="text-lg text-gray-600 mb-4">
            The Meridian County Animal Center is dedicated to providing compassionate care for homeless, abandoned, and surrendered animals while promoting responsible pet ownership throughout the community.
          </p>
          <p className="text-gray-600 mb-6">
            <strong>Address:</strong> 233 Wayne Avenue, Summersville, TN 25784
          </p>

          {/* Service Links */}
          <div className="grid sm:grid-cols-2 gap-3">
            {serviceLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md hover:border-blue-200 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{link.title}</h3>
                    <p className="text-xs text-gray-500">{link.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="lg:w-96 flex-shrink-0">
          <div className="relative h-80 lg:h-full rounded-xl overflow-hidden">
            <Image src="/images/meridian/park-bench.png" alt="Meridian County Animal Center" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {featureCards.map((card) => {
          const Icon = card.icon
          return (
            <div key={card.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          )
        })}
      </div>

      {/* Hours & FAQs */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Hours */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Operating Hours</h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {hours.map((item) => (
              <div key={item.day} className="flex justify-between px-5 py-3 border-b border-gray-100 last:border-b-0">
                <span className="font-medium text-gray-900">{item.day}</span>
                <span className={item.hours === 'Closed' ? 'text-red-500 font-medium' : 'text-gray-600'}>{item.hours}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">* Facility may be closed on county holidays.</p>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-4 text-gray-600 text-sm">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </InnerPageLayout>
  )
}
