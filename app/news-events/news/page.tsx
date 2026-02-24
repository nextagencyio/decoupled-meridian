'use client'
import Image from 'next/image'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const articles = [
  {
    title: 'Meridian County Breaks Ground on New Community Center',
    date: 'February 20, 2026',
    excerpt: 'The $12 million Northridge Community Center will feature a gymnasium, meeting rooms, and a senior center. Construction is expected to be completed by Fall 2027. The facility will serve over 15,000 residents in the northern part of the county.',
    image: '/images/meridian/conference-meeting.png',
    category: 'Infrastructure',
  },
  {
    title: 'Board Approves 2026-2027 County Budget',
    date: 'February 15, 2026',
    excerpt: 'The Board of Supervisors unanimously approved the $485 million county budget, which includes increased funding for public safety, parks, and road maintenance. The budget also allocates $5 million for a new emergency communications system.',
    image: '/images/meridian/meeting.png',
    category: 'Government',
  },
  {
    title: 'Water Conservation Rebate Program Extended Through 2026',
    date: 'February 10, 2026',
    excerpt: 'Meridian County residents can continue to receive rebates for water-efficient appliances and drought-tolerant landscaping through December 2026. Over 3,000 households have already benefited from the program.',
    image: '/images/meridian/underwater.png',
    category: 'Environment',
  },
  {
    title: 'County Parks Earn National Gold Medal Award',
    date: 'February 3, 2026',
    excerpt: 'Meridian County Parks & Recreation has been recognized with the National Gold Medal Award for Excellence in Park and Recreation Management, making it one of only six counties nationwide to receive the honor this year.',
    image: '/images/meridian/park-bench.png',
    category: 'Parks',
  },
  {
    title: 'New Online Permit System Launches March 1',
    date: 'January 28, 2026',
    excerpt: 'Meridian County Building & Safety is launching a new online permitting system that will allow residents and contractors to apply for permits, schedule inspections, and track permit status from any device.',
    image: '/images/meridian/laptop-person.jpg',
    category: 'Services',
  },
  {
    title: 'Sheriff Department Launches Community Safety Initiative',
    date: 'January 22, 2026',
    excerpt: 'The Meridian County Sheriff Department announced a new community policing initiative focused on neighborhood engagement, youth mentorship, and crime prevention partnerships with local businesses.',
    image: '/images/meridian/law-enforcement.jpeg',
    category: 'Public Safety',
  },
  {
    title: 'County Announces Road Improvement Plan for Highway 14',
    date: 'January 15, 2026',
    excerpt: 'A $28 million road improvement project along the Highway 14 corridor will widen the road to four lanes, add bike paths, and improve intersections. Construction begins in April 2026.',
    image: '/images/meridian/featured-photo.png',
    category: 'Transportation',
  },
  {
    title: 'Animal Center Celebrates Record Adoption Year',
    date: 'January 8, 2026',
    excerpt: 'The Meridian County Animal Center placed over 4,200 animals in homes during 2025, a 15% increase over the previous year. The center credits community foster programs and adoption events for the success.',
    image: '/images/meridian/hero-tree.png',
    category: 'Community',
  },
]

const categoryColors: Record<string, string> = {
  Infrastructure: 'bg-blue-50 text-blue-700',
  Government: 'bg-indigo-50 text-indigo-700',
  Environment: 'bg-emerald-50 text-emerald-700',
  Parks: 'bg-green-50 text-green-700',
  Services: 'bg-purple-50 text-purple-700',
  'Public Safety': 'bg-red-50 text-red-700',
  Transportation: 'bg-orange-50 text-orange-700',
  Community: 'bg-yellow-50 text-yellow-700',
}

export default function NewsPage() {
  return (
    <InnerPageLayout
      title="News"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'News & Events', href: '/news-events' },
        { label: 'News' },
      ]}
      heroImage="/images/meridian/featured-photo.png"
    >
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        Stay informed with the latest news and announcements from Meridian County government.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <article
            key={article.title}
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className={`absolute top-3 left-3 px-2.5 py-0.5 text-xs font-medium rounded-full ${categoryColors[article.category] || 'bg-gray-50 text-gray-700'}`}>
                {article.category}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs text-gray-400 mb-2">{article.date}</p>
              <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3">{article.excerpt}</p>
              <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                Read more &rarr;
              </button>
            </div>
          </article>
        ))}
      </div>
    </InnerPageLayout>
  )
}
