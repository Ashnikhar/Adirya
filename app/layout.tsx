import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ash',
  description: 'Created by Ash',
  generator: 'Ash',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
