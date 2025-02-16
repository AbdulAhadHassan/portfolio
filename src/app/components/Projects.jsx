"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js",
    image: "/shop.jpg?height=200&width=300",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A task management app with a refined interface",
    image: "/task.jpg?height=200&width=300",
  },
  {
    id: 3,
    title: "Weather App",
    description: "A weather app that provides real-time weather updates",
    image: "/weather.jpg",
  },
  {
    id: 4,
    title: "Personal Calculator",
    description: "A calculator that helps you calculate your daily expenses",
    image: "/calculator.png",
  },
  {
    id: 5,
    title: "Lms Dashboard",
    description: "A lms dashboard that helps you to manage your learning",
    image: "/lms-project.png",
  },
]

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
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
          <div key={project.id}  className="px-2">
            <motion.div
              className="bg-navy-light/50 backdrop-blur-sm p-6 rounded-lg border border-beige/20 transition-transform hover:scale-105 h-full shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover mb-4 rounded"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={project.image}
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

