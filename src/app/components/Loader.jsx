import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-navy z-50">
      <motion.div
        className="w-16 h-16 border-4 border-t-transparent border-beige-light rounded-full animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}