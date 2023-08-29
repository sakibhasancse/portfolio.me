import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sakib Hasan - portfolio',
  description: 'Sakib Hasan CSE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="sakib_fav_icon.jpeg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
