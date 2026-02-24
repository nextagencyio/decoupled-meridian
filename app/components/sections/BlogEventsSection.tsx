'use client'

import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    image: '/images/meridian/business-meeting.png',
    date: 'September 30, 2025',
    title: 'Efficient Waste Management: Revolutionizing Garbage Collection in Meridian County',
    href: '#',
  },
  {
    image: '/images/meridian/justice-court.jpeg',
    date: 'October 8, 2025',
    title: 'Welcome to the New Meridian County Website!',
    href: '#',
  },
]

const events = [
  {
    month: 'FEB',
    day: '23',
    title: 'Youth Sports League Games',
    time: '7:00am - 9:00am',
  },
  {
    month: 'FEB',
    day: '23',
    title: "County Commissioner's Meeting",
    time: '7:19am - 9:19am',
  },
  {
    month: 'FEB',
    day: '23',
    title: 'Jazz in the Yard',
    time: '7:30am - 9:30am',
  },
]

export default function BlogEventsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Blog posts - 60% */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <Link key={index} href={post.href} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                    <div className="relative h-64">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Upcoming events - 40% */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  <div className="flex-shrink-0 w-14 h-16 bg-blue-600 rounded-lg flex flex-col items-center justify-center text-white">
                    <span className="text-xs font-semibold uppercase leading-none">
                      {event.month}
                    </span>
                    <span className="text-2xl font-bold leading-none mt-0.5">
                      {event.day}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
