'use client'
import { MapPin, Clock, DollarSign, Briefcase } from 'lucide-react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const openings = [
  {
    title: 'Senior Civil Engineer',
    department: 'Public Works',
    location: 'County Administration Building',
    type: 'Full-Time',
    salary: '$95,000 - $125,000/year',
    posted: 'February 18, 2026',
    closes: 'March 18, 2026',
    description: 'Lead design and construction oversight for county infrastructure projects including roads, bridges, and drainage systems.',
  },
  {
    title: 'Park Ranger',
    department: 'Parks & Recreation',
    location: 'Meridian Regional Park',
    type: 'Full-Time',
    salary: '$52,000 - $68,000/year',
    posted: 'February 15, 2026',
    closes: 'March 15, 2026',
    description: 'Patrol and maintain county park lands. Enforce park rules, provide visitor assistance, and coordinate conservation efforts.',
  },
  {
    title: 'Building Inspector II',
    department: 'Building & Safety',
    location: 'Various Locations',
    type: 'Full-Time',
    salary: '$65,000 - $85,000/year',
    posted: 'February 12, 2026',
    closes: 'March 12, 2026',
    description: 'Conduct building inspections for residential and commercial construction to ensure compliance with codes and approved plans.',
  },
  {
    title: 'Administrative Assistant',
    department: 'Administration',
    location: 'County Administration Building',
    type: 'Full-Time',
    salary: '$42,000 - $55,000/year',
    posted: 'February 10, 2026',
    closes: 'March 10, 2026',
    description: 'Provide administrative support including scheduling, correspondence, document management, and front desk reception.',
  },
  {
    title: 'Water Quality Analyst',
    department: 'Water Authority',
    location: 'Water Treatment Plant',
    type: 'Full-Time',
    salary: '$60,000 - $78,000/year',
    posted: 'February 5, 2026',
    closes: 'March 5, 2026',
    description: 'Monitor and test water quality samples, maintain laboratory equipment, and prepare regulatory compliance reports.',
  },
  {
    title: 'Recreation Leader (Part-Time)',
    department: 'Parks & Recreation',
    location: 'Northridge Community Center',
    type: 'Part-Time',
    salary: '$18 - $22/hour',
    posted: 'February 1, 2026',
    closes: 'Open until filled',
    description: 'Lead youth and adult recreation programs including sports, arts, and fitness classes at the community center.',
  },
  {
    title: 'IT Support Specialist',
    department: 'Information Technology',
    location: 'County Administration Building',
    type: 'Full-Time',
    salary: '$55,000 - $72,000/year',
    posted: 'January 28, 2026',
    closes: 'February 28, 2026',
    description: 'Provide technical support for county employees. Install, configure, and troubleshoot hardware, software, and network systems.',
  },
]

export default function JobsPage() {
  return (
    <InnerPageLayout
      title="Jobs"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Residents', href: '/residents' },
        { label: 'Jobs' },
      ]}
      heroImage="/images/meridian/business-meeting.png"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <p className="text-lg text-gray-600 mb-8">
            Meridian County offers competitive salaries, excellent benefits, and the opportunity to serve your community. View our current openings below.
          </p>

          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-sm text-blue-600 font-medium">{job.department}</p>
                  </div>
                  <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full flex-shrink-0 ${
                    job.type === 'Full-Time' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'
                  }`}>
                    {job.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{job.description}</p>
                <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5" />
                    {job.salary}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Closes: {job.closes}
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                    View Full Posting &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-80 space-y-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <h2 className="font-semibold text-blue-900">Benefits</h2>
            </div>
            <ul className="text-sm text-blue-700 space-y-2">
              <li>Medical, dental, and vision insurance</li>
              <li>CalPERS retirement plan</li>
              <li>Paid vacation and sick leave</li>
              <li>11 paid holidays per year</li>
              <li>Tuition reimbursement</li>
              <li>Life and disability insurance</li>
              <li>Flexible spending accounts</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Job Alerts</h3>
            <p className="text-sm text-gray-600 mb-4">
              Sign up to receive notifications when new positions are posted that match your interests.
            </p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Set Up Alerts
            </button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Questions?</h3>
            <p className="text-sm text-gray-600 mb-2">Human Resources Department</p>
            <p className="text-sm text-gray-700">(555) 100-1100</p>
            <p className="text-sm text-gray-700">hr@meridiancounty.gov</p>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  )
}
