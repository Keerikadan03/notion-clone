import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
          storageKey='notion-key'
        >
          {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
