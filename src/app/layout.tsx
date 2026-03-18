import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'kwerk – bureaux d\'exception et suites prestiges à Paris',
  description: 'Kwerk crée des bureaux d\'exception au cœur de Paris, où hospitalité, discrétion et art de recevoir façonnent une expérience de travail unique.',
  keywords: 'coworking, bureaux, Paris, luxe, 8ème arrondissement, Messine, Madeleine, Haussmann, Saint-Honoré',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
