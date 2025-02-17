"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center py-16 md:py-0">
      
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8 mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/parsonal-pfp.png"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full shadow-lg"
          />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl text-center font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-beige-light to-beige-dark"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Hi! I'm Abdul Ahad
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-center text-beige mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          I'm a web developer passionate about creating sophisticated and inviting digital experiences.
        </motion.p>
        <motion.a
          href="#contact"
          className="flex justify-center bg-beige text-navy px-6 py-3 rounded-full text-lg font-semibold hover:bg-beige-light transition-colors shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>

    </section>
  )
}

