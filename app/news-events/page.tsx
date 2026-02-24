'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react'
import InnerPageLayout from '../components/sections/InnerPageLayout'

const recentNews = [
  {
    title: 'Meridian County Breaks Ground on New Community Center',
    date: 'February 20, 2026',
    excerpt: 'The $12 million Northridge Community Center will feature a gymnasium, meeting rooms, and a senior center. Construction is expected to be completed by Fall 2027.',
    image: '/images/meridian/conference-meeting.png',
    category: 'Infrastructure',
  },
  {
    title: 'Board Approves 2026-2027 County Budget',
    date: 'February 15, 2026',
    excerpt: 'The Board of Supervisors unanimously approved the $485 million county budget, which includes increased funding for public safety, parks, and road maintenance.',
    image: '/images/meridian/meeting.png',
    category: 'Government',
  },
  {
    title: 'Water Conservation Rebate Program Extended',
    date: 'February 10, 2026',
    excerpt: 'Meridian County residents can continue to receive rebates for water-efficient appliances and drought-tolerant landscaping through December 2026.',
    image: '/images/meridian/underwater.png',
    category: 'Environment',
  },
]

const upcomingEvents = [
  {
    title: 'Community Town Hall Meeting',
    date: 'Mar 5',
    day: 'Thursday',
    time: '6:00 PM - 8:00 PM',
    location: 'Board Chambers, 123 Main St',
  },
  {
    title: 'Spring Job Fair',
    date: 'Mar 12',
    day: 'Thursday',
    time: '10:00 AM - 3:00 PM',
    location: 'County Fairgrounds',
  },
  {
    title: 'Parks Cleanup Day',
    date: 'Mar 15',
    day: 'Saturday',
    time: '8:00 AM - 12:00 PM',
    location: 'Meridian Regional Park',
  },
  {
    title: 'Small Business Workshop',
    date: 'Mar 20',
    day: 'Thursday',
    time: '9:00 AM - 12:00 PM',
    location: 'County Library, Room B',
  },
]

export default function NewsEventsPage() {
  return (
    <InnerPageLayout
      title="News & Events"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'News & Events' },
      ]}
      heroImage="/images/meridian/featured-photo.png"
    >
      {/* Recent News */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Recent News</h2>
          <Link
            href="/news-events/news"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
          >
            View all news <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recentNews.map((article) => (
            <article
              key={article.title}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/90 text-xs font-medium text-blue-700 rounded-full">
                  {article.category}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-400 mb-2">{article.date}</p>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
          <Link
            href="/news-events/events"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
          >
            View all events <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-600 text-white flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold leading-tight">{event.date.split(' ')[0]}</span>
                <span className="text-xs">{event.date.split(' ')[1]}</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                <div className="flex flex-col gap-1 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {event.day}, {event.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InnerPageLayout>
  )
}
