/* eslint-disable camelcase */
'use client'

import { Providers } from '@/components/providers'
import { Fira_Sans, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins'
})
const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-firasans'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${firaSans.variable} bg-white-300 dark:bg-dark-100 h-full w-full min-h-screen`}
      >
        <link rel="icon" href="./favicon.png" sizes="any" />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
