import "./globals.css"
import { Poppins } from "next/font/google"
import Header from "./components/Header"
import { AnimatePresence } from "framer-motion"
import SocialBar from "./components/SocialBar"

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "My Elegant Portfolio",
  description: "Welcome to my personal portfolio website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${poppins.variable} font-sans bg-navy text-beige`}>
        <Header />
        <AnimatePresence mode="wait">
          <main className="pb-16">{children}</main>
        </AnimatePresence>
        <SocialBar />
      </body>
    </html>
  )
}
