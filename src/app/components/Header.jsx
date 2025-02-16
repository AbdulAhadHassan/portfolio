"use client"

import { useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
]

export default function Header() {
  const [activeItem, setActiveItem] = useState("Home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-navy-light/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-beige font-bold text-xl"> &lt;AbdulAhad/&gt;</div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-beige">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul className={`md:flex md:space-x-8 ${isMenuOpen ? "block" : "hidden"} md:block`}>
            {navItems.map((item) => (
              <li key={item.name} className="md:inline-block">
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={200}
                  onSetActive={() => setActiveItem(item.name)}
                  className="relative text-beige hover:text-beige-light transition-colors cursor-pointer block py-2 md:py-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {/* {activeItem === item.name && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-beige"
                      layoutId="underline"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )} */}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

