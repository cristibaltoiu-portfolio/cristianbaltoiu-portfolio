import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BackToTop } from './components/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cristian Baltoiu | Senior Digital Product Manager',
  description: 'Senior Digital Product Manager | SAFe SPC & RTE | Enterprise Service Management Platforms | AI & Agentic Transformation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}