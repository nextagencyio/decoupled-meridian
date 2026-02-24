'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const faqCategories = [
  {
    category: 'Property & Taxes',
    items: [
      {
        question: 'When are property taxes due?',
        answer: 'Property taxes are paid in two installments. The first installment is due November 1 and becomes delinquent December 10. The second installment is due February 1 and becomes delinquent April 10.',
      },
      {
        question: 'How do I appeal my property assessment?',
        answer: 'Property owners may file an assessment appeal with the Assessment Appeals Board within 60 days of the date the assessment notice is mailed. Applications are available at the Assessor\'s office or online at meridiancounty.gov/assessor.',
      },
      {
        question: 'Where can I pay my property taxes?',
        answer: 'Property taxes can be paid online through the Payments Portal, by mail to the Tax Collector\'s office, or in person at the County Administration Building, 123 Main Street, Meridian. We accept cash, check, and credit/debit cards.',
      },
    ],
  },
  {
    category: 'Building & Permits',
    items: [
      {
        question: 'Do I need a permit to build a fence?',
        answer: 'Fences under 6 feet in height generally do not require a building permit. However, fences over 6 feet, fences in the front yard setback, and retaining walls over 4 feet require a permit. Check with Building & Safety at (555) 100-2000.',
      },
      {
        question: 'How long does it take to get a building permit?',
        answer: 'Standard residential permits are typically reviewed within 10-15 business days. Complex commercial projects may take 4-6 weeks. Expedited review is available for an additional fee.',
      },
      {
        question: 'Can I do my own electrical work?',
        answer: 'Homeowners may perform electrical work on their own primary residence with a valid homeowner permit. All work must be inspected and meet current electrical code standards.',
      },
    ],
  },
  {
    category: 'Water & Utilities',
    items: [
      {
        question: 'How do I start water service?',
        answer: 'New water service accounts can be set up by contacting the Water Authority at (555) 100-6000 or visiting our office at the County Administration Building. You will need a valid ID and proof of property ownership or a lease agreement.',
      },
      {
        question: 'What are the current water conservation requirements?',
        answer: 'Meridian County is currently in Stage 2 water conservation. Outdoor watering is limited to three days per week before 10 AM or after 6 PM. Rebates are available for water-efficient appliances and drought-tolerant landscaping.',
      },
      {
        question: 'Why is my water bill higher than usual?',
        answer: 'Common causes include seasonal irrigation use, water leaks, or a change in rates. Check for running toilets, dripping faucets, and irrigation system leaks. You can request a meter test by calling (555) 100-6000.',
      },
    ],
  },
  {
    category: 'Parks & Recreation',
    items: [
      {
        question: 'How do I reserve a park facility?',
        answer: 'Park facilities can be reserved online at meridiancounty.gov/parks or by calling (555) 100-4000. Reservations should be made at least two weeks in advance. Fees vary by facility type and group size.',
      },
      {
        question: 'Are dogs allowed in county parks?',
        answer: 'Dogs are welcome in most county parks and must be kept on a leash no longer than 6 feet. Off-leash dog parks are available at Meridian Regional Park and Lakewood Park. Please clean up after your pet.',
      },
    ],
  },
  {
    category: 'Government & Voting',
    items: [
      {
        question: 'How do I register to vote in Meridian County?',
        answer: 'You can register to vote online at the Secretary of State website, at the County Registrar\'s office, or at your local DMV. You must be a U.S. citizen, a resident of Meridian County, at least 18 years old, and not currently serving a state or federal prison term.',
      },
      {
        question: 'How do I attend a Board of Supervisors meeting?',
        answer: 'Board meetings are held the first and third Tuesday of each month at 9:00 AM at the Board Chambers, 123 Main Street. Meetings are open to the public. Agendas are posted 72 hours in advance at meridiancounty.gov/agenda.',
      },
      {
        question: 'How do I request public records?',
        answer: 'Public records requests can be submitted online, by email to records@meridiancounty.gov, or in writing to the County Clerk\'s office. Most requests are fulfilled within 10 business days per the Public Records Act.',
      },
    ],
  },
]

export default function FAQsPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['Property & Taxes-0']))

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }
      return next
    })
  }

  return (
    <InnerPageLayout
      title="Frequently Asked Questions"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Residents', href: '/residents' },
        { label: 'FAQs' },
      ]}
    >
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        Find answers to the most commonly asked questions about Meridian County services and procedures.
      </p>

      <div className="space-y-8">
        {faqCategories.map((category) => (
          <div key={category.category}>
            <h2 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h2>
            <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
              {category.items.map((item, index) => {
                const key = `${category.category}-${index}`
                const isOpen = openItems.has(key)
                return (
                  <div key={key}>
                    <button
                      type="button"
                      onClick={() => toggleItem(key)}
                      className="flex w-full items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                    >
                      <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h2>
        <p className="text-gray-600 mb-4">
          Contact the Meridian County Customer Service Center for additional assistance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:5551000000"
            className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Call (555) 100-0000
          </a>
          <a
            href="/residents/contact"
            className="px-6 py-2.5 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </InnerPageLayout>
  )
}
