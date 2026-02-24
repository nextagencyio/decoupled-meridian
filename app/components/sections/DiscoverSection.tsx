'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function DiscoverSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <p className="uppercase text-blue-600 text-sm font-semibold tracking-wider mb-3">
              DISCOVER
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Experience Meridian
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nestled in the heart of America, our county is a place where history and progress
              walk hand in hand. Generations have built strong communities here, grounded in
              values of hard work, neighborliness, and pride in our heritage. At the same time,
              we embrace innovation, sustainable growth, and new opportunities that strengthen
              our future. From vibrant main streets and thriving businesses to scenic parks and
              cultural landmarks, our county offers something for everyone.
            </p>
            <Link
              href="/discover"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Discover
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="/images/meridian/park-bench.png"
              alt="Park with swing bench in Meridian County"
              width={600}
              height={450}
              className="rounded-2xl object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
