import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion',
  description: 'Notion is the connected workspace where better, faster work happens.',
  icons: {
    icon: [
      // {
      //   media: "(prefers-color-scheme: light)",
      //   url: "/notion_black_logo_icon_147102.svg",
      //   href: "/notion_black_logo_icon_147102.svg"
      // },
      {
        // media: "(prefers-color-scheme: dark)",
        url: "/notion.svg",
        href: "/notion.svg"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
