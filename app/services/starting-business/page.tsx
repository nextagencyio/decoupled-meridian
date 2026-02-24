'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Wine, Dog, Car, Music, UtensilsCrossed, Dumbbell, ShoppingBag, Briefcase, Bus } from 'lucide-react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const licenseCategories = [
  { title: 'Alcohol Licenses', description: 'Breweries, cabarets, entertainment venues, retail liquor', icon: Wine },
  { title: 'Animal Licenses', description: 'Pet shops, kennels, veterinary clinics, animal boarding', icon: Dog },
  { title: 'Automotive Licenses', description: 'Auto repair, dealerships, towing services, car washes', icon: Car },
  { title: 'Entertainment Licenses', description: 'Event venues, theaters, amusement facilities, gaming', icon: Music },
  { title: 'Food & Lodging', description: 'Restaurants, food trucks, hotels, bed & breakfasts', icon: UtensilsCrossed },
  { title: 'Health & Fitness', description: 'Gyms, spas, salons, massage therapy, wellness centers', icon: Dumbbell },
  { title: 'Merchandise', description: 'Retail stores, street vendors, flea markets, pawn shops', icon: ShoppingBag },
  { title: 'Professional Services', description: 'Consulting, legal, accounting, real estate, contracting', icon: Briefcase },
  { title: 'Transportation', description: 'Taxi services, ride-share, freight, courier services', icon: Bus },
]

export default function StartingBusinessPage() {
  return (
    <InnerPageLayout
      title="Starting a Business in Meridian"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Starting a Business' },
      ]}
    >
      {/* Intro */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="flex-1">
          <p className="text-lg text-gray-600 mb-4">
            Economic development is at the forefront of growing our beautiful county. Our goal is to provide a simple and streamlined process for registering a new and expanding business.
          </p>

          {/* Portal CTA */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Business One-Stop-Shop Portal</h2>
            <p className="text-gray-600 mb-4">
              Simple access to register a new business, renew a business license, and search for existing licenses — all through one free account.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Access Portal
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
              Register New Business
            </button>
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
              Renew License
            </button>
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
              Search Licenses
            </button>
          </div>
        </div>

        <div className="lg:w-96 flex-shrink-0">
          <div className="relative h-80 lg:h-full rounded-xl overflow-hidden">
            <Image src="/images/meridian/business-meeting.png" alt="Starting a business in Meridian" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* License Categories */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">License Categories</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {licenseCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{category.title}</h3>
                <p className="text-gray-500 text-sm">{category.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </InnerPageLayout>
  )
}
