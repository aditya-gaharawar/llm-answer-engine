import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { AI } from './action'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const title = 'WEBSPACEAI'
const description = 'Search Engine Build on Genrative AI.'

export const metadata: Metadata = {
  metadataBase: new URL('https://morphic.sh'),
  title,
  description,
  openGraph: {
    title,
    description
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <AI>{children}</AI>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
