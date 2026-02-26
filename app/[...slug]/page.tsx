import { notFound } from 'next/navigation'
import { getApolloClient } from '@/lib/apollo-client'
import { GET_LANDING_PAGE, GET_ALL_LANDING_PAGES } from '@/lib/queries'
import type { LandingPage, ParagraphType } from '@/lib/types'
import { ParagraphList } from '../components/paragraphs/ParagraphRenderer'
import { isDemoMode, getMockPageByPath, getMockPages } from '@/lib/demo-mode'

// Force dynamic rendering so content updates are reflected immediately
export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

const isDrupalConfigured = () => !!process.env.NEXT_PUBLIC_DRUPAL_BASE_URL

// Strip outer <p> tags from simple HTML strings (e.g. "<p>text</p>" → "text")
function stripOuterParagraph(html: string): string {
  const trimmed = html.trim()
  const match = trimmed.match(/^<p>([\s\S]*)<\/p>$/i)
  if (match && !match[1].includes('<p>')) {
    return match[1]
  }
  return trimmed
}

// Helper to extract .value from Text type fields and strip outer <p> tags
function extractTextValue(obj: unknown): unknown {
  if (obj === null || obj === undefined) return obj
  if (typeof obj !== 'object') return obj
  if (Array.isArray(obj)) return obj.map(extractTextValue)

  const record = obj as Record<string, unknown>
  if ('value' in record && typeof record.value === 'string' && Object.keys(record).length <= 3) {
    return stripOuterParagraph(record.value)
  }

  const result: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(record)) {
    result[key] = extractTextValue(value)
  }
  return result
}

function transformSections(sections: unknown[]): ParagraphType[] {
  return sections.map(section => extractTextValue(section)) as ParagraphType[]
}

async function getPage(path: string): Promise<LandingPage | null> {
  if (!isDrupalConfigured()) {
    return null
  }

  try {
    const client = getApolloClient()
    const { data } = await client.query({
      query: GET_LANDING_PAGE,
      variables: { path },
      fetchPolicy: 'network-only',
    })

    const entity = data?.route?.entity
    if (!entity) return null

    return {
      ...entity,
      sections: transformSections(entity.sections || [])
    }
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

export async function generateStaticParams() {
  if (!isDrupalConfigured()) {
    return []
  }

  try {
    const client = getApolloClient()
    const { data } = await client.query({
      query: GET_ALL_LANDING_PAGES,
      fetchPolicy: 'network-only',
    })

    const pages = data?.nodeLandingPages?.nodes || []

    return pages
      .filter((page: any) => page?.path && page.path !== '/')
      .map((page: any) => ({
        slug: page.path.split('/').filter(Boolean),
      }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const path = `/${slug.join('/')}`

  // In demo mode or when Drupal is not configured, return 404
  // Static inner pages are handled by their own route files
  if (isDemoMode() || !isDrupalConfigured()) {
    notFound()
  }

  const page = await getPage(path)

  if (!page) {
    notFound()
  }

  return (
    <>
      <ParagraphList sections={page.sections} />
    </>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const path = `/${slug.join('/')}`

  if (isDemoMode() || !isDrupalConfigured()) {
    return {
      title: 'Page Not Found | Meridian County',
    }
  }

  const page = await getPage(path)

  if (!page) {
    return {
      title: 'Page Not Found | Meridian County',
    }
  }

  return {
    title: `${page.title} | Meridian County`,
    description: `${page.title} - Meridian County Government`,
  }
}
