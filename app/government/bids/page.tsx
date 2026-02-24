'use client'
import { Clock, FileText, Tag, AlertCircle } from 'lucide-react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const bids = [
  {
    id: 'RFP-2026-042',
    title: 'County Building HVAC System Replacement',
    department: 'Public Works',
    posted: 'February 10, 2026',
    deadline: 'March 15, 2026 at 2:00 PM',
    estimatedValue: '$750,000 - $1,200,000',
    status: 'Open',
  },
  {
    id: 'ITB-2026-038',
    title: 'Road Resurfacing - Highway 14 Corridor',
    department: 'Transportation',
    posted: 'February 5, 2026',
    deadline: 'March 8, 2026 at 4:00 PM',
    estimatedValue: '$2,100,000 - $2,800,000',
    status: 'Open',
  },
  {
    id: 'RFP-2026-035',
    title: 'Parks & Recreation Master Plan Update',
    department: 'Parks & Recreation',
    posted: 'January 28, 2026',
    deadline: 'March 1, 2026 at 2:00 PM',
    estimatedValue: '$150,000 - $250,000',
    status: 'Open',
  },
  {
    id: 'ITB-2026-031',
    title: 'Office Furniture and Equipment Procurement',
    department: 'Administration',
    posted: 'January 20, 2026',
    deadline: 'February 28, 2026 at 4:00 PM',
    estimatedValue: '$85,000 - $120,000',
    status: 'Closing Soon',
  },
  {
    id: 'RFP-2026-027',
    title: 'Cybersecurity Assessment & Penetration Testing',
    department: 'Information Technology',
    posted: 'January 15, 2026',
    deadline: 'February 20, 2026 at 2:00 PM',
    estimatedValue: '$60,000 - $100,000',
    status: 'Closed',
  },
  {
    id: 'ITB-2026-022',
    title: 'Fleet Vehicle Maintenance Services',
    department: 'Public Works',
    posted: 'January 8, 2026',
    deadline: 'February 12, 2026 at 4:00 PM',
    estimatedValue: '$200,000 - $350,000',
    status: 'Closed',
  },
]

function StatusBadge({ status }: { status: string }) {
  const styles = {
    Open: 'bg-green-50 text-green-700 border-green-200',
    'Closing Soon': 'bg-yellow-50 text-yellow-700 border-yellow-200',
    Closed: 'bg-gray-100 text-gray-500 border-gray-200',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status as keyof typeof styles] || styles.Open}`}>
      {status}
    </span>
  )
}

export default function BidsPage() {
  return (
    <InnerPageLayout
      title="Current Bids & RFPs"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Government', href: '/government' },
        { label: 'Current Bids & RFPs' },
      ]}
      heroImage="/images/meridian/business-meeting.png"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <p className="text-lg text-gray-600 mb-8">
            Meridian County is committed to fair and competitive procurement. Below are current solicitations open for bidding.
          </p>

          <div className="space-y-4">
            {bids.map((bid) => (
              <div
                key={bid.id}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-gray-400">{bid.id}</span>
                      <StatusBadge status={bid.status} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{bid.title}</h3>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span>{bid.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span>Posted: {bid.posted}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>Due: {bid.deadline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-gray-400 font-medium">$</span>
                    <span>{bid.estimatedValue}</span>
                  </div>
                </div>

                {bid.status !== 'Closed' && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                      View Full Solicitation &rarr;
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-80 space-y-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-3">Vendor Registration</h2>
            <p className="text-sm text-blue-700 mb-4">
              Register as an approved vendor to receive bid notifications and submit proposals electronically.
            </p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Register Now
            </button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-gray-400" />
              <h3 className="font-semibold text-gray-900">Need Help?</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              For questions about bids or the procurement process:
            </p>
            <div className="text-sm text-gray-700 space-y-1">
              <p><strong>Procurement Office</strong></p>
              <p>(555) 234-5678</p>
              <p>procurement@meridiancounty.gov</p>
            </div>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  )
}
