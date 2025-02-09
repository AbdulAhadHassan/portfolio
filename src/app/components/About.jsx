"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      className="bg-navy-light/50 backdrop-blur-sm p-8 rounded-lg border border-beige/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-4 text-beige-light"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-beige leading-relaxed"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        I'm a passionate web developer with experience in React, Next.js, and various other modern web technologies. I
        love creating responsive and user-friendly websites that feel as sophisticated and inviting as a well-designed
        living room. My approach combines elegance and creativity with technical expertise to deliver refined digital
        experiences.
      </motion.p>
    </motion.section>
  )
}

