"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updatePosition)

    return () => window.removeEventListener("mousemove", updatePosition)
  }, [])

  return (
    <>
      <div
        className="fixed w-4 h-4 rounded-full bg-beige pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: "transform 0.1s ease-out",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="fixed w-8 h-8 rounded-full border-2 border-beige pointer-events-none z-40 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: "transform 0.3s ease-out",
          transform: "translate(-50%, -50%) scale(1.2)",
        }}
      />
    </>
  )
}

