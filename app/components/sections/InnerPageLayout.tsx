'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface InnerPageLayoutProps {
  title: string
  breadcrumbs: { label: string; href?: string }[]
  heroImage?: string
  children: React.ReactNode
}

export default function InnerPageLayout({
  title,
  breadcrumbs,
  heroImage = '/images/meridian/hero-bg.png',
  children,
}: InnerPageLayoutProps) {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src={heroImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-wide">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-wide py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-gray-500">
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Page Content */}
      <div className="container-wide py-12 md:py-16">
        {children}
      </div>
    </div>
  )
}
