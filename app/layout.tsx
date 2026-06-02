export const metadata: Metadata = {
  metadataBase: new URL('https://cristianbaltoiu.com'),

  title: {
    default: 'Cristian Baltoiu | Product & IT Transformation Leader',
    template: '%s | Cristian Baltoiu',
  },

  description:
    'Portfolio of Cristian Baltoiu, focused on product ownership, IT transformation, service management, agile delivery and digital leadership.',

  openGraph: {
    title: 'Cristian Baltoiu | Product & IT Transformation Leader',
    description:
      'Portfolio, projects, experience and insights from Cristian Baltoiu.',
    url: 'https://cristianbaltoiu.com',
    siteName: 'Cristian Baltoiu Portfolio',
    type: 'website',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cristian Baltoiu Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Cristian Baltoiu | Product & IT Transformation Leader',
    description:
      'Portfolio, projects, experience and insights from Cristian Baltoiu.',
    images: ['/og-image.png'],
  },
}