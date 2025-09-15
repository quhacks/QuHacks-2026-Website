import './globals.css'
import { Inter } from 'next/font/google'

import NavBar from './components/navbar/navbar'
import Footer from './components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QuHacks 2026',
  description: "MD's largest annual student led hackathon!",
  metadataBase: new URL('https://quhacks.tech'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className={inter.className}>   
        <NavBar></NavBar>     
        <section className='page'>
          {children}
        </section>
        <Footer></Footer>
      </body>
    </html>
  )
}
