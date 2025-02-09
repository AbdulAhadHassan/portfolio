import "./globals.css"
import { Poppins } from "next/font/google"
import Header from "./components/Header"
import CustomCursor from "./components/CustomCursor"
import { AnimatePresence } from "framer-motion"

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
        <CustomCursor />
        <Header />
        <AnimatePresence mode="wait">
          <main>{children}</main>
        </AnimatePresence>
        <footer className="bg-navy-light border-t border-beige/20 py-4 text-center text-sm">
          <p>&copy; 2023 My Elegant Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

