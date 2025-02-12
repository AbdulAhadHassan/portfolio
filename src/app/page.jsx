import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-4 space-y-24 py-16">
      <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

