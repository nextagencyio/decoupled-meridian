'use client'
import Image from 'next/image'
import { Waves, LifeBuoy, Dumbbell, Accessibility, Phone, Mail, MapPin } from 'lucide-react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const programs = [
  {
    title: 'Swimming Lessons',
    description: 'Group and private swimming lessons for ages 3 and up. Sessions range from 10 to 60 minutes with free ability assessments. Skill progression tracked across all levels.',
    icon: Waves,
  },
  {
    title: 'Lap Swim & Fitness',
    description: 'Lap swim, water aerobics, and water walking programs available daily. Open to all skill levels. Great for low-impact exercise and cardiovascular fitness.',
    icon: Dumbbell,
  },
  {
    title: 'Lifeguard Training',
    description: 'Comprehensive lifeguard certification courses for ages 15 and up. Includes CPR/First Aid certification, water rescue techniques, and ongoing skill evaluations.',
    icon: LifeBuoy,
  },
  {
    title: 'Adaptive Swimming',
    description: 'Specialized swimming lessons designed for individuals with disabilities. One-on-one instruction with certified adaptive aquatics instructors.',
    icon: Accessibility,
  },
]

const registrationMethods = [
  { method: 'Online', description: 'Register through the Meridian County Recreation Portal 24/7' },
  { method: 'By Phone', description: 'Call (788) 555-0100 during business hours (Mon–Fri, 8AM–5PM)' },
  { method: 'In Person', description: 'Visit City Hall Recreation Department, 100 Main Street, 2nd Floor' },
]

export default function RegisterPage() {
  return (
    <InnerPageLayout
      title="Register for Swimming Lessons"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Register' },
      ]}
    >
      {/* Intro & Registration Methods */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="flex-1">
          <p className="text-lg text-gray-600 mb-8">
            The Meridian Aquatics Center offers year-round swimming programs for residents of all ages and abilities. Register today for one of our many aquatics programs.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">How to Register</h2>
          <div className="space-y-4 mb-8">
            {registrationMethods.map((item) => (
              <div key={item.method} className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.method[0]}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.method}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Register Online
          </button>
        </div>

        <div className="lg:w-96 flex-shrink-0">
          <div className="relative h-80 lg:h-full rounded-xl overflow-hidden">
            <Image src="/images/meridian/underwater.png" alt="Meridian Aquatics Center" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Programs */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Programs</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <div key={program.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Contact */}
      <div className="bg-blue-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          The Meridian Aquatics Center features an Olympic-size pool, warm-water therapy pool, splash pad, and multipurpose meeting rooms. Contact us for more information about programs and facility rentals.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">(788) 555-0100</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">aquatics@meridiancounty.gov</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">450 Pool Drive</span>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  )
}
