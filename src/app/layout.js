import './globals.css'
import { Sora as MainFont } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'
import { FaGithub, FaLinkedin } from "react-icons/fa6"

const font = MainFont({ subsets: ['latin'] })

export const metadata = {
  title: "Louis Pham | Software Developer",
  author: "Louis Pham",
  description: "Hello and welcome to my personal website! — software developer based in the Greater Toronto Area",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={`${font.className} mx-auto max-w-5xl`}>
        <main className="flex flex-col mx-auto items-left px-14 pt-20 pb-6 max-w-3xl pink-margin">
          {children}
        </main>
        <footer className="flex justify-between mx-1 px-4 py-3 border-t border-dashed">
          <div className="flex items-center gap-1">
            <div className="text-md"><a className="text-black" href="https://www.linkedin.com/in/louispham" target="_blank"><FaLinkedin /></a></div>
            <div className="text-md"><a className="text-black" href="https://github.com/louis-pham" target="_blank"><FaGithub /></a></div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="text-xs">© 2024 Louis Pham</div>
            <Image src="/cable2.svg" width={50} height={50} alt="My tag" />
          </div>
        </footer>
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-62H1YNFCNT" />
      <Script id="google-analytics">
        {`
          const host = window.location.hostname;
          if(host !== "localhost")
          {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-62H1YNFCNT');
          }
        `}
      </Script>
    </html>
  )
}
