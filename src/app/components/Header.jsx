"use client"

import { useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
]

export default function Header() {
  const [activeItem, setActiveItem] = useState("Home")

  return (
    <header  className="bg-navy/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-10">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <ScrollLink
                to={item.to}
                spy={true}
                smooth={true}
                offset={-30}
                duration={90}
                onSetActive={() => setActiveItem(item.name)}
                className="relative text-beige hover:text-beige-light transition-colors cursor-pointer"
              >
                {item.name}
                {/* {activeItem === item.name && (
                  // <motion.div
                  //   className="absolute -bottom-1 left-0 right-0 h-0.5 bg-beige"
                  //   layoutId="underline"
                  //   initial={false}
                  //   transition={{
                  //     type: "spring",
                  //     stiffness: 700,
                  //     damping: 40,
                  //   }}
                  // />
                )} */}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

