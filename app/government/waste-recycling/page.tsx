'use client'
import Link from 'next/link'
import { Video, Leaf, Trash2, Building2, Recycle, FileText, Ban, TrendingDown, MapPin, Briefcase, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const highlights = [
  { title: 'Virtual Tour', description: 'Take a virtual tour to learn about the W&R Center and understand the importance of recycling and waste management.', icon: Video },
  { title: 'Composting Guide', description: 'Step-by-step instructions for setting up and maintaining a composting system at home or in your community garden.', icon: Leaf },
  { title: 'Trash Pickup Schedule', description: 'View your district\'s weekly trash and recycling pickup schedule. Special bulk pickup available by request.', icon: Trash2 },
  { title: 'Landfill Management', description: 'Learn about best practices in landfill management and how the county reduces environmental impact.', icon: Building2 },
]

const popularTopics = [
  { title: 'Landfill Management', icon: Building2 },
  { title: 'Recycling Guidelines', icon: Recycle },
  { title: 'Single-Use Plastic Info', icon: Ban },
  { title: 'Waste Reduction Tips', icon: TrendingDown },
  { title: 'Recycling Center Locations', icon: MapPin },
  { title: 'Employment Opportunities', icon: Briefcase },
]

const faqs = [
  { question: 'What items can be recycled curbside?', answer: 'Curbside recycling accepts paper, cardboard, glass bottles, aluminum cans, steel cans, and plastics #1-5 and #7. All items should be rinsed and free of food contamination. No plastic bags, styrofoam, or electronics.' },
  { question: 'How do I dispose of hazardous materials?', answer: 'Hazardous materials such as paint, batteries, motor oil, and chemicals should be brought to the County Household Hazardous Waste Facility. Drop-off events are also held quarterly at various locations.' },
  { question: 'How can I request a bulk pickup?', answer: 'Bulk pickup for large items (furniture, appliances, mattresses) can be scheduled by calling Public Works at (788) 555-0103 or submitting an online request. One bulk pickup per month is included for county residents.' },
  { question: 'What are the landfill hours?', answer: 'The Meridian County Landfill is open Monday through Saturday, 7:00 AM to 4:30 PM. The landfill is closed on Sundays and county holidays. Commercial vehicles require a permit.' },
]

export default function WasteRecyclingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <InnerPageLayout
      title="Waste & Recycling"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Government', href: '/government' },
        { label: 'Waste & Recycling' },
      ]}
    >
      {/* Intro */}
      <p className="text-lg text-gray-600 mb-10">
        Serving Meridian County and promoting environmental sustainability through responsible waste management, recycling programs, and community education.
      </p>

      {/* Highlight Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {highlights.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          )
        })}
      </div>

      {/* Topics & Resources */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h2>
          <div className="space-y-3">
            {popularTopics.map((topic) => {
              const Icon = topic.icon
              return (
                <Link
                  key={topic.title}
                  href="#"
                  className="group flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md hover:border-green-200 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                    <Icon className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">{topic.title}</span>
                </Link>
              )
            })}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources</h2>
          <div className="space-y-3">
            {popularTopics.map((topic) => {
              const Icon = topic.icon
              return (
                <Link
                  key={`resource-${topic.title}`}
                  href="#"
                  className="group flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md hover:border-green-200 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">{topic.title}</span>
                </Link>
              )
            })}
          </div>
        </div>
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
    </InnerPageLayout>
  )
}
