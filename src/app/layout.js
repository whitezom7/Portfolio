`use client`


import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '../components/footer';
import Navbar from '../components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Taylor Whitewood | Portfolio',
  description: 'Created in NextJS and TailwindCSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-blue-950"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
