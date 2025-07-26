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
      <body>{children}
         <script
          src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"
          defer
        ></script>
        <script
          src="https://files.bpcontent.cloud/2025/07/25/18/20250725185126-X2M74NKN.js"
          defer
        ></script>
      </body>
    </html>
  )
}
