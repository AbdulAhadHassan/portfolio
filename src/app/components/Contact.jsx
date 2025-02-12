"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { submitContactForm } from "../actions/contact"

export default function Contact() {
  const [message, setMessage] = useState("")

  async function handleSubmit(formData) {
    const result = await submitContactForm(formData)
    if (result.success) {
      setMessage(result.message)
    }
  }

  return (
    <motion.section
      id="contact"
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
        Get in Touch
      </motion.h2>
      <motion.form
        action={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div>
          <label htmlFor="name" className="block mb-1 text-beige">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 bg-navy-dark/30 border border-beige/20 rounded text-navy"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-beige">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 bg-navy-dark/30 border border-beige/20 rounded text-navy"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 text-beige">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full p-2 bg-navy-dark/30 border border-beige/20 rounded text-navy"
            rows={4}
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="bg-beige text-navy px-6 py-2 rounded hover:bg-beige-light transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
      {message && <p className="mt-4 text-beige-light">{message}</p>}
    </motion.section>
  )
}

