"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="hero" className="min-h-40 flex flex-col items-center justify-center py-16">
      <motion.div
        className="text-center px-4 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
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
            width={200}
            height={200}
            className="rounded-full shadow-lg"
          />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-beige-light to-beige-dark"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Hi! I'm Abdul Ahad
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-beige mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          I'm a web developer passionate about creating sophisticated and inviting digital experiences.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block bg-beige text-navy px-6 py-3 rounded-full text-lg font-semibold hover:bg-beige-light transition-colors shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  )
}

