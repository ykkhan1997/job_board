'use client'
import { GlobalProvider, useGlobalContext } from '@/context/store'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/others-header'
import Footer from '@/components/footer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Inter font family
const inter = Inter({
   subsets: ['latin'],
   variable: '--font-inter',
   display: 'swap',
})

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <GlobalProvider>
         <Body>{children}</Body>
      </GlobalProvider>
   )
}

const Body = ({ children }: { children: React.ReactNode }) => {
   const { theme } = useGlobalContext()
   return (
      <html lang="en" data-theme={theme} className={inter.variable}>
         <body>{children}</body>
      </html>
   )
}
