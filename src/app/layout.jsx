import "aos/dist/aos.css";
import { Analytics } from '@vercel/analytics/react';
import {Toaster } from 'sonner'
import Animation from '../context/Animation'
import './globals.css'
import '../../public/main.scss'
import { Roboto } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"

import NoSsr from "../utils/NoSsr";
import "../../src/index.scss";
import MainProvider from "./MainProvider";


const roboto = Roboto({
  weight: ['300','400','500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({ children }) {
  
  return (
    <html  lang="en" className={roboto.className} >
      <head>
      
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet" />
        
      </head>
      <body suppressHydrationWarning={true} >
      <NoSsr><MainProvider>
        <Animation>
       <SpeedInsights/>
        <Toaster richColors/>
        
        <Analytics/>
         {children}
        </Animation>
        </MainProvider></NoSsr>
      </body>
    </html>
  )
}
