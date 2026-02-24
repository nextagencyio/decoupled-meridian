import Link from 'next/link'
import Image from 'next/image'

const aboutLinks = [
  { name: 'Protecting Water', href: '/about/protecting-water' },
  { name: 'Water Quality', href: '/about/water-quality' },
  { name: 'Flood Control', href: '/about/flood-control' },
  { name: 'Water Supply', href: '/about/water-supply' },
  { name: 'Natural Systems', href: '/about/natural-systems' },
  { name: '16 Counties', href: '/about/16-counties' },
]

const resourceLinks = [
  { name: "FAQ's", href: '/residents/faqs' },
  { name: 'Board Info', href: '/government/meet-the-board' },
  { name: 'Water Rates', href: '/services/water-rates' },
  { name: 'Latest News', href: '/news-events/news' },
  { name: 'Contact Us', href: '/residents/contact' },
]

const supportLinks = [
  { name: 'Connect', href: '/residents/contact' },
  { name: 'Learn', href: '/discover' },
  { name: 'Discover', href: '/discover/components' },
]

const bottomLinks = [
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Security', href: '/security' },
  { name: 'Sitemap', href: '/sitemap' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/meridian/logo.png"
                alt="Meridian County"
                width={140}
                height={36}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400">
              Rooted in Tradition, Growing Toward Tomorrow
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2.5">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-gray-400">
            {bottomLinks.map((link, index) => (
              <span key={link.name} className="flex items-center">
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
                {index < bottomLinks.length - 1 && (
                  <span className="mx-2">&middot;</span>
                )}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            &copy; Meridian County 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
