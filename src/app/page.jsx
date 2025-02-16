import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Skills from "./components/Skills"

export default function Home() {
  return (
    <div>
      <div className=" mx-auto px-4 space-y-24 py-16">

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

