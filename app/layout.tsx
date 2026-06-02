import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BackToTop } from './components/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://cristianbaltoiu.com'),
  title: {
    default: 'Cristian Baltoiu | Product & IT Transformation Leader',
    template: '%s | Cristian Baltoiu',
  },
  description:
    'Portfolio of Cristian Baltoiu, focused on product ownership, IT transformation, service management, agile delivery, and digital leadership.',
  openGraph: {
    title: 'Cristian Baltoiu | Product & IT Transformation Leader',
    description:
      'Portfolio, projects, experience, and insights from Cristian Baltoiu.',
    url: 'https://cristianbaltoiu.com',
    siteName: 'Cristian Baltoiu Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cristian Baltoiu | Product & IT Transformation Leader',
    description:
      'Portfolio, projects, experience, and insights from Cristian Baltoiu.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}