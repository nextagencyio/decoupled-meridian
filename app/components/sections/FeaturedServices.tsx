'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const services = [
  {
    image: '/images/meridian/featured-photo.png',
    title: 'Festival Registration',
    description: 'Meridian County opens registration for Annual River Days Festival',
    cta: 'Vendor Registration',
    href: '#',
  },
  {
    image: '/images/meridian/vote-day.png',
    title: 'Your Input Is Needed',
    description: 'Meridian County is seeking resident input on the new County Strategic Plan.',
    cta: 'Share Input',
    href: '#',
  },
  {
    image: '/images/meridian/meeting.png',
    title: 'Planning Commission Meeting',
    description: 'The Meridian County Commission will host a planning meeting open to the public.',
    cta: 'Meeting Information',
    href: '#',
  },
  {
    image: '/images/meridian/laptop-person.jpg',
    title: 'Meridian Park',
    description: 'Simple access to the Business One-Stop-Shop Portal, users can register a new business, renew a business license and search for existing licenses.',
    cta: 'Meridian Park',
    href: '#',
  },
]

export default function FeaturedServices() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }

  const maxIndex = Math.max(0, services.length - 3)

  const goLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goRight = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <section className="section-padding bg-white">
      {/* Blue separator line */}
      <div className="container-wide mb-12">
        <div className="h-0.5 bg-blue-600" />
      </div>

      <div className="container-wide">
        {/* Header */}
        <div className="mb-10">
          <p className="uppercase text-blue-600 text-sm font-semibold tracking-wider mb-3">
            STAY UP-TO-DATE
          </p>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Services
            </h2>
            <div className="flex gap-2">
              <button
                onClick={goLeft}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={goRight}
                disabled={currentIndex >= maxIndex}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3 + 2)}%)`,
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors w-full"
                    >
                      {service.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
