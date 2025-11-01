import type { Metadata } from 'next'
import { Open_Sans, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/src/_components/Navbar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
})

export const metadata: Metadata = {
  title: 'WESA - AI & Software Architecture Solutions',
  description: "A results-driven engineering and software architecture firm specializing in building AI-powered, scalable systems for highly demanding domains such as medical education, healthcare, and enterprise automation. Our mission: Enable organizations to accelerate innovation by transforming complex inputs into actionable, high-quality outcomes. We deliver production-grade AI infrastructure where accuracy, scalability and reliability are non-negotiable. Whether you're looking to automate content workflows, architect a secure exam platform, or create production-ready pipelines for AI-driven processing — WESA is your partner for turning technical complexity into streamlined solutions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black scrollbar-webkit`}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  )
}
