import "~/styles/globals.css"

import { Inter } from "next/font/google"
import { cookies } from "next/headers"

import { TRPCReactProvider } from "~/trpc/react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Luciana Police | Advogada",
  description: "Website da advogada em direito médico e da saúde Luciana Police",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  )
}
