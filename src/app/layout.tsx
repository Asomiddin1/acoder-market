import Navbar from '@/components/navbar/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/components/footer/footer';


const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Acoder-Market.uz',
  description: 'Acoder-market products for you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <ToastContainer />
        {children}
        <Footer />
        </body>
    </html>
  )
}
