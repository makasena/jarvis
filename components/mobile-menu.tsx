"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { InteractiveButton } from "./interactive-button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (sectionId: string) => void
}

export function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Menu Panel */}
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-gray-900 to-black border-l border-gray-800 shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="text-2xl font-bold tracking-wider text-cyan-400">JARVIS</div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-6 py-8">
            <nav className="space-y-6">
              {[
                { id: "about", label: "ABOUT" },
                { id: "tokenomics", label: "TOKENOMICS" },
                { id: "faq", label: "FAQ" },
                { id: "socials", label: "SOCIALS" },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="block w-full text-left text-xl font-semibold py-4 px-4 rounded-xl hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isOpen ? "slideInRight 0.3s ease-out forwards" : "none",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* CTA Button */}
          <div className="p-6 border-t border-gray-800">
            <InteractiveButton
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 text-lg font-semibold"
              href="https://ape.store/base/0x3c6817521531bf591ba031a254826bd480ce8725"
            >
              BUY JARVIS
            </InteractiveButton>
          </div>
        </div>
      </div>
    </div>
  )
}
