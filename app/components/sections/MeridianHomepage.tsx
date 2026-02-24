'use client'

import ParagraphHero from '../paragraphs/ParagraphHero'
import QuickActions from './QuickActions'
import DiscoverSection from './DiscoverSection'
import FeaturedServices from './FeaturedServices'
import WaterAuthority from './WaterAuthority'
import BlogEventsSection from './BlogEventsSection'
import ParagraphStats from '../paragraphs/ParagraphStats'
import ParagraphAccordion from '../paragraphs/ParagraphAccordion'
import NewsletterSignup from './NewsletterSignup'

const heroData = {
  __typename: 'ParagraphHero' as const,
  id: 'meridian-hero',
  title: 'Welcome to Meridian County',
  subtitle: 'Rooted in Tradition, Growing Toward Tomorrow',
  backgroundImage: {
    url: '/images/meridian/hero-tree.png',
    alt: 'Meridian County hero with large tree',
  },
  layout: 'left-aligned' as const,
}

const statsData = {
  __typename: 'ParagraphStat' as const,
  id: 'meridian-stats',
  eyebrow: 'BY THE NUMBERS',
  title: 'Meridian County is Growing',
  stats: [
    { id: '1', value: '88', label: 'Cities' },
    { id: '2', value: '500+', label: 'Local Businesses' },
    { id: '3', value: '12.4K', label: 'Residents' },
    { id: '4', value: '5,048', label: 'Square-Miles' },
  ],
}

const faqData = {
  __typename: 'ParagraphAccordion' as const,
  id: 'meridian-faq',
  title: 'Frequently Asked Questions',
  subtitle:
    'Find answers to common questions about Meridian County services, government, and community resources.',
  items: [
    {
      id: '1',
      question: 'How do I pay my property taxes?',
      answer:
        '<p>Property taxes can be paid online through the County Treasurer\'s portal, by mail, or in person at the County Administration Building. Visit our <a href="#">Pay Now</a> page for more details and payment options.</p>',
    },
    {
      id: '2',
      question: 'How can I attend a County Commissioner meeting?',
      answer:
        '<p>County Commissioner meetings are open to the public and held on the first and third Tuesday of each month at the County Administration Building. Agendas are posted 48 hours in advance on our website.</p>',
    },
    {
      id: '3',
      question: 'Where can I find information about building permits?',
      answer:
        '<p>Building permit applications and information are available through the Planning and Zoning Department. You can apply online, download forms from our website, or visit the department in person during business hours.</p>',
    },
    {
      id: '4',
      question: 'How do I register to vote in Meridian County?',
      answer:
        '<p>You can register to vote online through the Secretary of State\'s website, by mail, or in person at the County Clerk\'s office. Registration must be completed at least 30 days before an election.</p>',
    },
    {
      id: '5',
      question: 'What parks and recreation facilities are available?',
      answer:
        '<p>Meridian County offers over 25 public parks, 3 community recreation centers, and miles of hiking and biking trails. Visit our Parks and Recreation page for locations, hours, and program information.</p>',
    },
    {
      id: '6',
      question: 'How do I report a road or infrastructure issue?',
      answer:
        '<p>Road and infrastructure issues can be reported through our online service request portal, by calling the Public Works Department, or through the Meridian County mobile app. Emergency road hazards should be reported by calling 911.</p>',
    },
  ],
}

export default function MeridianHomepage() {
  return (
    <>
      <ParagraphHero {...heroData} />
      <QuickActions />
      <DiscoverSection />
      <FeaturedServices />
      <WaterAuthority />
      <BlogEventsSection />
      <ParagraphStats {...statsData} />
      <ParagraphAccordion {...faqData} />
      <NewsletterSignup />
    </>
  )
}
