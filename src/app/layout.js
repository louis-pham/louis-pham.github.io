import './globals.css'
import { Quicksand } from 'next/font/google'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from "react-icons/fa6"

const font = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: "Louis Pham",
  author: "Louis Pham",
  description: "Software developer based in the Greater Toronto Area.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <header className="flex px-3 py-3">
          {/* <Image src="/cable2.svg" width={75} height={50} alt="Picture of me" /> */}
        </header>
        <main className="flex flex-col mx-auto items-left px-6 py-20 max-w-2xl">
          {children}
        </main>
        <footer className="flex justify-between mx-6 py-3 border-t border-dashed">
          <div className="flex items-center gap-1">
            <div className="text-md"><a className="text-black" href="https://www.linkedin.com/in/louispham" target="_blank"><FaLinkedin /></a></div>
            <div className="text-md"><a className="text-black" href="https://github.com/louis-pham" target="_blank"><FaGithub /></a></div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="text-xs">© 2023 Louis Pham</div>
            <Image src="/cable2.svg" width={50} height={50} alt="My tag" />
          </div>
        </footer>
      </body>
    </html>
  )
}
