"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, MessageCircle, Facebook } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/AbdulAhadHassan" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/humans_104" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/AbdulAhadHassan" },
  { name: "Discord", icon: MessageCircle, url: "https://discordapp.com/users/runic_phyton" },
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/abdulahadhassan" },
]

export default function SocialBar() {
  return (
    <motion.div
      className="fixed left-0 right-0 bottom-0 z-50 flex justify-center gap-4 py-2 bg-navy-light/80 backdrop-blur-sm border-t border-beige/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-beige hover:text-beige-light transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <link.icon size={24} />
        </motion.a>
      ))}
    </motion.div>
  )
}

