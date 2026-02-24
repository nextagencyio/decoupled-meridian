'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function WaterAuthority() {
  return (
    <section className="bg-gray-900">
      <div className="grid md:grid-cols-2">
        {/* Image */}
        <div className="relative h-64 md:h-auto min-h-[400px]">
          <Image
            src="/images/meridian/underwater.png"
            alt="Underwater scene representing Meridian County Water Authority"
            fill
            className="object-cover"
          />
        </div>

        {/* Text content */}
        <div className="flex items-center px-8 py-16 md:px-16 lg:px-20">
          <div>
            <p className="uppercase text-green-400 text-sm font-semibold tracking-wider mb-3">
              SUSTAINABLE FUTURE
            </p>
            <h2 className="text-3xl font-bold text-white mb-6">
              Meridian County Water Authority
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Immerse yourself in the captivating landscapes and rich history of Meridian
              County. From picturesque countryside vistas to bustling town centers, our county
              offers a harmonious blend of natural beauty and modern living. Explore our diverse
              attractions, local events, and welcoming communities, and experience the essence
              of Meridian County like never before.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
