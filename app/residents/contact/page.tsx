'use client'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import InnerPageLayout from '../../components/sections/InnerPageLayout'

const departments = [
  { name: 'Main Switchboard', phone: '(555) 100-0000', email: 'info@meridiancounty.gov' },
  { name: 'Administration', phone: '(555) 100-1000', email: 'admin@meridiancounty.gov' },
  { name: 'Building & Safety', phone: '(555) 100-2000', email: 'building@meridiancounty.gov' },
  { name: 'Finance / Tax Collector', phone: '(555) 100-3000', email: 'finance@meridiancounty.gov' },
  { name: 'Parks & Recreation', phone: '(555) 100-4000', email: 'parks@meridiancounty.gov' },
  { name: 'Public Works', phone: '(555) 100-5000', email: 'publicworks@meridiancounty.gov' },
  { name: 'Water Authority', phone: '(555) 100-6000', email: 'water@meridiancounty.gov' },
  { name: 'Human Resources', phone: '(555) 100-1100', email: 'hr@meridiancounty.gov' },
]

export default function ContactPage() {
  return (
    <InnerPageLayout
      title="Contact Meridian County"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Residents', href: '/residents' },
        { label: 'Contact' },
      ]}
    >
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
          <p className="text-gray-600 mb-6">
            Fill out the form below and we will respond within 2 business days.
          </p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="john.smith@email.com"
              />
            </div>

            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <select
                id="department"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="">Select a department</option>
                <option value="general">General Inquiry</option>
                <option value="admin">Administration</option>
                <option value="building">Building & Safety</option>
                <option value="finance">Finance</option>
                <option value="parks">Parks & Recreation</option>
                <option value="public-works">Public Works</option>
                <option value="water">Water Authority</option>
              </select>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Brief description of your inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="lg:w-96 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">County Administration Building</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <p>123 Main Street</p>
                  <p>Meridian, CA 90000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-600">(555) 100-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-600">info@meridiancounty.gov</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <p>Monday - Friday</p>
                  <p>8:00 AM - 5:00 PM</p>
                  <p className="text-gray-400 mt-1">Closed on county holidays</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Department Directory</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {departments.map((dept) => (
                <div key={dept.name} className="px-6 py-3">
                  <p className="text-sm font-medium text-gray-900">{dept.name}</p>
                  <div className="flex flex-wrap gap-x-4 text-xs text-gray-500 mt-0.5">
                    <span>{dept.phone}</span>
                    <span>{dept.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="font-semibold text-red-900 mb-2">Emergency?</h3>
            <p className="text-sm text-red-700 mb-2">
              For life-threatening emergencies, call 911 immediately. For non-emergency police or fire assistance:
            </p>
            <p className="text-sm font-medium text-red-800">(555) 100-9000</p>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  )
}
