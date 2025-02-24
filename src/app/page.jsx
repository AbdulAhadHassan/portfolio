'use client'
import { useState, useEffect } from "react"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Loader from "./components/Loader"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Adjust the timeout duration as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div>
          <div className="mx-auto px-4 space-y-24 py-16">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      )}
    </>
  )
}

