"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ScrollAnimation({ children, className = "", delay = 0, direction = "up" }: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0)"

    switch (direction) {
      case "up":
        return "translate3d(0, 50px, 0)"
      case "down":
        return "translate3d(0, -50px, 0)"
      case "left":
        return "translate3d(50px, 0, 0)"
      case "right":
        return "translate3d(-50px, 0, 0)"
      default:
        return "translate3d(0, 50px, 0)"
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {children}
    </div>
  )
}
