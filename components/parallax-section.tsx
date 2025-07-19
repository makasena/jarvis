"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function ParallaxSection({ children, className = "", speed = 0.5 }: ParallaxSectionProps) {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={className}
      style={{
        transform: `translate3d(0, ${offsetY * speed}px, 0)`,
      }}
    >
      {children}
    </div>
  )
}
