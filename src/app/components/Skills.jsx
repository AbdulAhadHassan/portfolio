"use client"

import { motion } from "framer-motion"
import { Code, Database, GitBranch, Globe, Laptop, MessageCircle, PenTool, Zap } from "lucide-react"

const skills = [
  { name: "HTML5", icon: Globe, category: "Languages", proficiency: 90 },
  { name: "CSS3", icon: PenTool, category: "Languages", proficiency: 85 },
  { name: "JavaScript", icon: Code, category: "Languages", proficiency: 88 },
  { name: "TypeScript", icon: Code, category: "Languages", proficiency: 80 },
  { name: "React", icon: Zap, category: "Frameworks", proficiency: 85 },
  { name: "Node.js", icon: Laptop, category: "Frameworks", proficiency: 82 },
  { name: "Express.js", icon: Laptop, category: "Frameworks", proficiency: 80 },
  { name: "MongoDB", icon: Database, category: "Databases", proficiency: 75 },
  { name: "MySQL", icon: Database, category: "Databases", proficiency: 78 },
  { name: "Git", icon: GitBranch, category: "Tools", proficiency: 85 },
  { name: "Communication", icon: MessageCircle, category: "Soft Skills", proficiency: 90 },
  { name: "Problem-solving", icon: Zap, category: "Soft Skills", proficiency: 88 },
]

const SkillBadge = ({ skill }) => (
  <motion.div
    className="bg-navy-light/50 backdrop-blur-sm p-4 rounded-lg border border-beige/20 flex flex-col items-center justify-center gap-2 hover:bg-navy-light/70 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <skill.icon className="w-8 h-8 text-beige-light" />
    <h3 className="text-beige-light font-semibold">{skill.name}</h3>
    <div className="w-full bg-navy-dark/30 rounded-full h-2">
      <motion.div
        className="bg-beige h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${skill.proficiency}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </motion.div>
)

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.h2
        className="text-3xl font-bold mb-8 text-beige-light text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </section>
  )
}

