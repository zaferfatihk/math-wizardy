import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import { translate } from './utils/translate'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: translate('siteName'),
  description: translate('siteDescription'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

