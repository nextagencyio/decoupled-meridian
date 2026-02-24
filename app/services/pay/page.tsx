'use client'
import { Home, Droplets, ClipboardList, Scale, ArrowRight, ShieldCheck } from 'lucide-react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const paymentOptions = [
  {
    title: 'Property Tax',
    description: 'Pay current and delinquent property taxes. Search by parcel number or property address.',
    icon: Home,
    buttonText: 'Pay Property Tax',
    info: 'Annual taxes are due December 10 (1st installment) and April 10 (2nd installment).',
  },
  {
    title: 'Water Bill',
    description: 'Pay your Meridian County Water Authority bill. View current balance and payment history.',
    icon: Droplets,
    buttonText: 'Pay Water Bill',
    info: 'Bills are issued monthly. A 10% late penalty is applied after the due date.',
  },
  {
    title: 'Permit Fees',
    description: 'Pay fees for building permits, plan reviews, and inspection services.',
    icon: ClipboardList,
    buttonText: 'Pay Permit Fees',
    info: 'Enter your permit number to view outstanding fees and make payments.',
  },
  {
    title: 'Court Fines',
    description: 'Pay traffic citations, parking violations, and other court-ordered fines.',
    icon: Scale,
    buttonText: 'Pay Court Fines',
    info: 'Enter your citation number to look up your fine amount and due date.',
  },
]

export default function PayPage() {
  return (
    <InnerPageLayout
      title="Payments Portal"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Payments Portal' },
      ]}
    >
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        Make secure online payments to Meridian County. All transactions are processed through our encrypted payment system.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {paymentOptions.map((option) => {
          const Icon = option.icon
          return (
            <div
              key={option.title}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">{option.title}</h2>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mb-4 pl-16">{option.info}</p>
              <div className="pl-16">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  {option.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Secure Payments</h2>
            <p className="text-sm text-gray-600 mb-4">
              All online payments are processed using 256-bit SSL encryption. We accept Visa, Mastercard, American Express, Discover, and eCheck. A convenience fee may apply for credit and debit card transactions.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>Need help? Call (555) 100-3000</span>
              <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  )
}
