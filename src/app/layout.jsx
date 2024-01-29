import "aos/dist/aos.css";
import { Analytics } from '@vercel/analytics/react';
import {Toaster } from 'sonner'
import Animation from '../context/Animation'
import './globals.css'
import '../../public/main.scss'
import { Roboto } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import HeaderLanding from "@/components/header/landing/HeaderLanding";

const roboto = Roboto({
  weight: ['300','400','500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({ children }) {
  
  return (
    <html  lang="en" className={roboto.className} >
      <body  >
        <Animation>
       <SpeedInsights/>
        
        <Toaster richColors/>
        <HeaderLanding/>
        <Analytics/>
         {children}
        </Animation>
      </body>
    </html>
  )
}
