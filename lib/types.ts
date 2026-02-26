// Base types
export interface Image {
  url: string
  alt?: string
  width?: number
  height?: number
}

// Paragraph types
export type ParagraphType =
  | ParagraphHero
  | ParagraphCardGroup
  | ParagraphSidebyside
  | ParagraphAccordion
  | ParagraphQuote
  | ParagraphPricing
  | ParagraphLogoCollection
  | ParagraphStats
  | ParagraphNewsletter
  | ParagraphText

export interface ParagraphHero {
  __typename: 'ParagraphHero'
  id: string
  eyebrow?: string
  title: string
  subtitle?: string
  layout?: 'centered' | 'left-aligned'
  backgroundColor?: string
  backgroundImage?: Image
  primaryCtaText?: string
  primaryCtaUrl?: string
  secondaryCtaText?: string
  secondaryCtaUrl?: string
}

export interface Card {
  id: string
  icon?: string
  image?: Image
  title: string
  description?: string
  linkText?: string
  linkUrl?: string
}

export interface ParagraphCardGroup {
  __typename: 'ParagraphCardGroup'
  id: string
  eyebrow?: string
  title?: string
  subtitle?: string
  columns?: '2' | '3' | '4'
  cards?: Card[] | null
}

export interface FeatureItem {
  id: string
  icon?: string
  title: string
  description?: string
}

export interface ParagraphSidebyside {
  __typename: 'ParagraphSidebyside'
  id: string
  eyebrow?: string
  title: string
  description?: string
  image?: Image
  imagePosition?: 'left' | 'right'
  featureItems?: FeatureItem[]
  ctaText?: string
  ctaUrl?: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface ParagraphAccordion {
  __typename: 'ParagraphAccordion'
  id: string
  eyebrow?: string
  title?: string
  subtitle?: string
  items: FaqItem[]
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role?: string
  rating?: string
  avatar?: Image
}

export interface ParagraphQuote {
  __typename: 'ParagraphQuote'
  id: string
  eyebrow?: string
  title?: string
  testimonials: Testimonial[]
}

export interface PricingTier {
  id: string
  title: string
  price: string
  description?: string
  features?: string[]
  highlighted?: boolean
  ctaText?: string
  ctaUrl?: string
}

export interface ParagraphPricing {
  __typename: 'ParagraphPricing'
  id: string
  eyebrow?: string
  title?: string
  subtitle?: string
  tiers?: PricingTier[] | null
}

export interface Logo {
  id: string
  title: string
  image?: Image
  linkUrl?: string
}

export interface ParagraphLogoCollection {
  __typename: 'ParagraphLogoCollection'
  id: string
  eyebrow?: string
  title?: string
  logos: Logo[]
}

export interface StatItem {
  id: string
  value: string
  label: string
  description?: string
}

export interface ParagraphStats {
  __typename: 'ParagraphStat'
  id: string
  eyebrow?: string
  title?: string
  backgroundColor?: string
  stats: StatItem[]
}

export interface ParagraphNewsletter {
  __typename: 'ParagraphNewsletter'
  id: string
  eyebrow?: string
  title: string
  subtitle?: string
  placeholder?: string
  buttonText?: string
}

export interface ParagraphText {
  __typename: 'ParagraphTextBlock'
  id: string
  eyebrow?: string
  title?: string
  body?: string
  alignment?: 'left' | 'center'
  ctaText?: string
  ctaUrl?: string
}

// Node types
export interface LandingPage {
  id: string
  title: string
  path: string
  sections: ParagraphType[]
}

// GraphQL response types
export interface NodeByPathResponse {
  route?: {
    entity?: LandingPage | null
  } | null
}
