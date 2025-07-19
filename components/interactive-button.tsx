"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface InteractiveButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  onClick?: () => void
  href?: string
}

export function InteractiveButton({
  children,
  className = "",
  variant = "default",
  onClick,
  href,
}: InteractiveButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (href) {
      window.open(href, "_blank")
    }
    if (onClick) {
      onClick()
    }
  }

  return (
    <Button
      variant={variant}
      className={`
        relative overflow-hidden transition-all duration-300 transform
        ${isHovered ? "scale-105 shadow-2xl" : "scale-100"}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <span className="relative z-10">{children}</span>
      <div
        className={`
          absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 
          transition-opacity duration-300
          ${isHovered ? "opacity-20" : "opacity-0"}
        `}
      />
    </Button>
  )
}
