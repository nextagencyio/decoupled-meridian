'use client'

import Link from 'next/link'
import { Briefcase, ClipboardList, Building2, FileText, CreditCard } from 'lucide-react'

const actions = [
  { label: 'JOBS', icon: Briefcase, href: '/residents/jobs' },
  { label: 'AGENDA', icon: ClipboardList, href: '/government/agenda-minutes' },
  { label: 'FACILITIES', icon: Building2, href: '/locations' },
  { label: 'BIDS', icon: FileText, href: '/government/bids' },
  { label: 'PAY NOW', icon: CreditCard, href: '/services/pay' },
]

export default function QuickActions() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container-wide">
        <div className="flex overflow-x-auto gap-4 md:gap-6 justify-center pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <Link
                key={action.label}
                href={action.href}
                className="flex flex-col items-center gap-2 min-w-[100px] px-6 py-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                  {action.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
