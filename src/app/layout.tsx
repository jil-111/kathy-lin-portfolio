import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kathy Lin - Product Manager Portfolio',
  description: 'Product Manager focused on AI & User-Centric Design - UC Berkeley MHCI Graduate',
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
