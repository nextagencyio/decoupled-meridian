'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search, ChevronDown, Globe, User } from 'lucide-react'

const navigation = [
  { name: 'Discover Meridian', href: '/discover', children: [
    { name: 'What is Meridian?', href: '/discover' },
    { name: 'Components', href: '/discover/components' },
  ]},
  { name: 'Meridian Homepage', href: '/' },
  { name: 'Government', href: '/government', children: [
    { name: 'Agenda & Minutes', href: '/government/agenda-minutes' },
    { name: 'Bids', href: '/government/bids' },
    { name: 'Departments', href: '/government/departments' },
    { name: 'Meet the Board', href: '/government/meet-the-board' },
  ]},
  { name: 'Services', href: '/services', children: [
    { name: 'Building Permit', href: '/services/building-permit' },
    { name: 'Animal Center', href: '/services/animal-center' },
    { name: 'Pay', href: '/services/pay' },
    { name: 'Register', href: '/services/register' },
    { name: 'Report & Request', href: '/services/report-request' },
    { name: 'Starting a Business', href: '/services/starting-business' },
  ]},
  { name: 'News & Events', href: '/news-events', children: [
    { name: 'Events', href: '/news-events/events' },
    { name: 'News', href: '/news-events/news' },
  ]},
  { name: 'Residents', href: '/residents', children: [
    { name: 'Contact Meridian', href: '/residents/contact' },
    { name: 'FAQs', href: '/residents/faqs' },
    { name: 'Jobs', href: '/residents/jobs' },
    { name: 'Public Safety', href: '/residents/public-safety' },
  ]},
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    }
  }, [])

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setOpenDropdown(name)
  }

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  return (
    <header className="z-50">
      {/* Alert Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm">
        <div className="container-wide py-2 text-center">
          <p>
            City office buildings, including the Salisbury Customer Service Center and recreation centers will be closed on Tuesday, November 11.
          </p>
        </div>
      </div>

      {/* Dark Blue Top Bar */}
      <div className="bg-blue-700 text-white">
        <div className="container-wide flex items-center justify-end h-9 gap-4 text-sm">
          <button className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
            <Globe className="w-4 h-4" />
            <span>Translate this page</span>
          </button>
          <button className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
            <User className="w-4 h-4" />
            <span className="sr-only">Account</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200" aria-label="Main navigation">
        <div className="container-wide">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/meridian/logo.png"
                alt="Meridian County"
                width={180}
                height={46}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                  >
                    {item.name}
                    {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search & Mobile Toggle */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                type="button"
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Toggle menu</span>
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar (expandable) */}
          {searchOpen && (
            <div className="pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search Meridian County..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="container-wide py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        onClick={() =>
                          setMobileAccordion(
                            mobileAccordion === item.name ? null : item.name
                          )
                        }
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileAccordion === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {mobileAccordion === item.name && (
                        <div className="ml-4 space-y-1 pb-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
