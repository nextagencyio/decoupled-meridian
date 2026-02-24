'use client'
import Image from 'next/image'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import InnerPageLayout from '../components/sections/InnerPageLayout'

const facilities = [
  {
    name: 'County Courthouse',
    description: 'The main judicial facility for Meridian County, housing the Circuit Court, District Court, and Clerk of Courts offices.',
    address: '100 Main Street, Meridian, TN 25780',
    phone: '(788) 555-0101',
    hours: 'Mon–Fri: 8:00 AM – 5:00 PM',
    image: '/images/meridian/justice-court.jpeg',
  },
  {
    name: 'County Administration Building',
    description: 'Administrative offices including the County Commission, Planning & Zoning, Finance, and Human Resources departments.',
    address: '200 Government Drive, Meridian, TN 25780',
    phone: '(788) 555-0102',
    hours: 'Mon–Fri: 8:00 AM – 5:00 PM',
    image: '/images/meridian/conference-meeting.png',
  },
  {
    name: 'Public Works Department',
    description: 'Handles road maintenance, water and sewer services, solid waste management, and infrastructure projects.',
    address: '350 Industrial Blvd, Meridian, TN 25781',
    phone: '(788) 555-0103',
    hours: 'Mon–Fri: 7:00 AM – 4:00 PM',
    image: '/images/meridian/meeting.png',
  },
  {
    name: 'Parks & Recreation Center',
    description: 'Community recreation center with gymnasium, fitness center, meeting rooms, and outdoor sports fields.',
    address: '500 Park Avenue, Meridian, TN 25780',
    phone: '(788) 555-0104',
    hours: 'Mon–Sat: 6:00 AM – 9:00 PM, Sun: 8:00 AM – 6:00 PM',
    image: '/images/meridian/park-bench.png',
  },
  {
    name: 'Meridian County Animal Center',
    description: 'Animal adoption, pet registration, and lost & found services. Home to dogs, cats, and other animals looking for forever homes.',
    address: '233 Wayne Avenue, Summersville, TN 25784',
    phone: '(788) 555-0105',
    hours: 'Tue–Sat: 12:00 PM – 6:00 PM',
    image: '/images/meridian/hero-bg.png',
  },
  {
    name: 'Meridian Aquatics Center',
    description: 'Olympic-size pool, warm-water therapy pool, splash pad, and multipurpose meeting rooms for community use.',
    address: '450 Pool Drive, Meridian, TN 25780',
    phone: '(788) 555-0100',
    hours: 'Mon–Sat: 6:00 AM – 8:00 PM, Sun: 8:00 AM – 5:00 PM',
    image: '/images/meridian/underwater.png',
  },
]

export default function LocationsPage() {
  return (
    <InnerPageLayout
      title="Facilities"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Facilities' },
      ]}
    >
      <p className="text-lg text-gray-600 mb-10">
        Find information about Meridian County government buildings, recreation centers, and public facilities.
      </p>

      <div className="space-y-6">
        {facilities.map((facility) => (
          <div
            key={facility.name}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-72 flex-shrink-0 relative h-48 md:h-auto">
                <Image src={facility.image} alt={facility.name} fill className="object-cover" />
              </div>
              <div className="p-6 flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{facility.name}</h2>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{facility.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{facility.phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{facility.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </InnerPageLayout>
  )
}
