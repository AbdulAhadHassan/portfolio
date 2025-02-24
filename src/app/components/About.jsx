"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function About() {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <motion.section
      id="about"
      className="bg-navy-light/50 backdrop-blur-sm p-8 rounded-lg border border-beige/20 shadow-lg hover:shadow-xl"
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
      <motion.div
        className="text-beige text-lg md:text-xl px-4 md:px-8"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className={`overflow-hidden ${showMore ? "" : "line-clamp-4"}`}>
          I'm a web developer passionate about creating sophisticated and inviting digital experiences. I have experience in various web technologies including React, Next.js, HTML, CSS, Tailwind, MongoDB, Node.js, JavaScript, and Express.js. I enjoy working on challenging projects and continuously learning new skills to improve my craft.
        </p>
        <button
          onClick={toggleShowMore}
          className="text-beige-light font-semibold mt-2 block lg:hidden"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </motion.div>
    </motion.section>
  )
}

