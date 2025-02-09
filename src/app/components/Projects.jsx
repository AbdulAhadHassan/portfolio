"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const projects = [
  {
    id: 1,
    title: "Elegant E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js and Stripe",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Sophisticated Task Management App",
    description: "A React-based task management application with a refined interface",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Stylish Weather Dashboard",
    description: "A weather dashboard that feels like checking the weather from a luxury hotel room",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section id="projects" className="py-16">
      <motion.h2
        className="text-3xl font-bold mb-8 text-beige-light text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Elegant Projects
      </motion.h2>
      <Slider {...settings} className="project-slider">
        {projects.map((project, index) => (
          <div key={project.id} className="px-4">
            <motion.div
              className="bg-navy-light/50 backdrop-blur-sm p-6 rounded-lg border border-beige/20 transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2 text-beige-light">{project.title}</h3>
              <p className="text-beige">{project.description}</p>
            </motion.div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

