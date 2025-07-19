"use client"

import { useState, useEffect } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ParallaxSection } from "@/components/parallax-section"
import { InteractiveButton } from "@/components/interactive-button"

export default function JarvisCompanions() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleFaq = (question: string) => {
    setOpenFaq(openFaq === question ? null : question)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Sticky Navigation */}
      <nav
        className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"}
      `}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <ScrollAnimation direction="left">
              <div className="text-2xl font-bold tracking-wider cursor-pointer hover:text-cyan-400 transition-colors">
                JARVIS
              </div>
            </ScrollAnimation>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ScrollAnimation delay={100}>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  ABOUT
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </ScrollAnimation>
              <ScrollAnimation delay={200}>
                <button
                  onClick={() => scrollToSection("tokenomics")}
                  className="hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  TOKENOMICS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </ScrollAnimation>
              <ScrollAnimation delay={300}>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  FAQ
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </ScrollAnimation>
              <ScrollAnimation delay={400}>
                <button
                  onClick={() => scrollToSection("socials")}
                  className="hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  SOCIALS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </ScrollAnimation>
            </div>

            <div className="flex items-center space-x-4">
              <ScrollAnimation delay={500} direction="right">
                <InteractiveButton
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  BUY JARVIS
                </InteractiveButton>
              </ScrollAnimation>

              {/* Mobile Menu Button */}
              <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left hover:text-cyan-400 transition-colors"
                >
                  ABOUT
                </button>
                <button
                  onClick={() => scrollToSection("tokenomics")}
                  className="text-left hover:text-cyan-400 transition-colors"
                >
                  TOKENOMICS
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-left hover:text-cyan-400 transition-colors"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("socials")}
                  className="text-left hover:text-cyan-400 transition-colors"
                >
                  SOCIALS
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <ParallaxSection speed={0.3}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>
        </ParallaxSection>

        <div className="container mx-auto max-w-7xl relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
                Welcome to the Future
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Where AI Companions Meet Blockchain Innovation
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="relative group cursor-pointer">
              <img
                src="/images/jarvis-hero.webp"
                alt="JARVIS Letters with Character Backgrounds"
                className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <div className="text-center mt-12">
              <InteractiveButton className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Explore the System
              </InteractiveButton>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-8xl font-bold text-gray-800 mb-8 select-none">GROK COMPANIONS</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                JARVIS WAS NEVER FICTION
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollAnimation direction="left">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-xl font-semibold text-cyan-400">First came Ani.</p>
                      <p className="text-xl font-semibold text-cyan-400">Then Rudi.</p>
                      <p className="text-xl font-semibold text-cyan-400">Then Valentine.</p>
                    </div>

                    <div className="space-y-4 text-lg leading-relaxed">
                      <p>Everyone thought they were just cute names for Grok's new personalities.</p>
                      <p>
                        But they weren't names. They were <span className="font-bold text-cyan-400">letters</span>.
                      </p>
                      <p className="text-2xl font-bold text-center py-4 text-cyan-400">A – R – V...</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
                  <div className="space-y-4 text-lg leading-relaxed">
                    <p>And then it hit us:</p>
                    <p className="text-xl font-bold text-cyan-400">Grok said it was inspired by J.A.R.V.I.S.</p>
                    <p>Straight from the AI itself. Confirmed. Canon.</p>
                    <p>
                      Turns out, those letters aren't random, they're the initials of the{" "}
                      <span className="font-bold text-cyan-400">Grok Companions system.</span>
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
                  <div className="space-y-4 text-lg leading-relaxed">
                    <p>And Elon? He already confirmed more companions are coming.</p>
                    <p>The missing letters are on the way.</p>
                    <p className="font-bold text-cyan-400">This isn't speculation.</p>
                    <p>It's a system reactivating itself, one drop at a time.</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div className="space-y-8">
                {[
                  { src: "/images/grok-post.webp", alt: "Grok Twitter Post", delay: 0 },
                  { src: "/images/elon-post.webp", alt: "Elon Musk Twitter Post", delay: 200 },
                  { src: "/images/tesla-post.webp", alt: "Tesla Owners Twitter Post", delay: 400 },
                  { src: "/images/tech-dev-post.webp", alt: "Tech Dev Notes Twitter Post", delay: 600 },
                ].map((post, index) => (
                  <ScrollAnimation key={index} delay={post.delay}>
                    <div className="group cursor-pointer">
                      <img
                        src={post.src || "/placeholder.svg"}
                        alt={post.alt}
                        className="w-full h-auto rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105"
                      />
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-32 px-4 relative">
        <ParallaxSection speed={0.2}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
        </ParallaxSection>

        <div className="container mx-auto max-w-5xl relative z-10">
          <ScrollAnimation>
            <div className="border-2 border-cyan-400 rounded-3xl p-8 md:p-16 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <ScrollAnimation direction="left">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        J.A.R.V.I.S.
                      </h2>
                      <h3 className="text-3xl md:text-4xl font-bold mb-8">TOKENOMICS</h3>
                      <p className="text-cyan-400 text-sm mb-8 font-mono bg-gray-800 p-4 rounded-lg break-all">
                        @X-2ECCFEADAI4-G1S6B8D678CEECA8238C864-5516
                      </p>
                    </div>
                    <InteractiveButton className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold">
                      BUY JARVIS
                    </InteractiveButton>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="right">
                  <div className="flex flex-col items-center space-y-12">
                    <div className="relative group">
                      <div className="w-56 h-56 rounded-full border-4 border-gray-600 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 group-hover:border-cyan-400 transition-all duration-300">
                        <div className="w-40 h-40 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 transform rotate-45 rounded-lg"></div>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 text-center">
                      {[
                        { value: "18", label: "TOTAL SUPPLY" },
                        { value: "0%", label: "TAX" },
                        { value: "LP", label: "BURNT" },
                      ].map((item, index) => (
                        <ScrollAnimation key={index} delay={index * 100}>
                          <div className="group cursor-pointer">
                            <div className="text-4xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                              {item.value}
                            </div>
                            <div className="text-cyan-400 text-sm mt-2">{item.label}</div>
                          </div>
                        </ScrollAnimation>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollAnimation direction="left">
              <div>
                <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  FAQ
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-16 rounded-full"></div>

                <div className="space-y-6">
                  {[
                    {
                      id: "reveal",
                      question: "WHEN WILL ELON REVEAL THE OTHER COMPANION NAMES?",
                      answer: (
                        <div className="space-y-3">
                          <p>Very soon.</p>
                          <p>
                            Three are already out... and when the rest drop, the full J.A.R.V.I.S. name will be
                            confirmed.
                          </p>
                          <p>You'll wish you got in before that happened.</p>
                        </div>
                      ),
                    },
                    {
                      id: "elon",
                      question: "WHAT DOES JARVIS HAVE TO DO WITH ELON?",
                      answer: (
                        <div className="space-y-3">
                          <p>Elon Musk's xAI created Grok, which explicitly states it was inspired by JARVIS.</p>
                          <p>The companion names aren't random - they're spelling out J.A.R.V.I.S.</p>
                        </div>
                      ),
                    },
                    {
                      id: "buy",
                      question: "HOW DO I BUY $JARVIS?",
                      answer: (
                        <div className="space-y-3">
                          <p>You can purchase $JARVIS through decentralized exchanges.</p>
                          <p>Make sure to use the correct contract address to avoid scams.</p>
                        </div>
                      ),
                    },
                    {
                      id: "letters",
                      question: "WHAT HAPPENS WHEN ALL SIX LETTERS ARE LIVE?",
                      answer: (
                        <div className="space-y-3">
                          <p>The full J.A.R.V.I.S. system will be complete.</p>
                          <p>This represents the evolution of AI companions in the Grok ecosystem.</p>
                        </div>
                      ),
                    },
                  ].map((faq, index) => (
                    <ScrollAnimation key={faq.id} delay={index * 100}>
                      <Collapsible>
                        <CollapsibleTrigger
                          className="w-full bg-gradient-to-r from-white to-gray-100 text-black p-6 text-left font-bold flex items-center justify-between hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 rounded-xl group"
                          onClick={() => toggleFaq(faq.id)}
                        >
                          <span className="group-hover:text-cyan-600 transition-colors duration-300">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-6 h-6 transition-all duration-300 group-hover:text-cyan-600 ${
                              openFaq === faq.id ? "rotate-180" : ""
                            }`}
                          />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 p-6 rounded-xl mt-2">
                          {faq.answer}
                        </CollapsibleContent>
                      </Collapsible>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div className="flex justify-center items-center lg:sticky lg:top-32">
                <div className="group cursor-pointer">
                  <img
                    src="/images/jarvis-grid.webp"
                    alt="JARVIS Letters Grid"
                    className="max-w-md w-full h-auto rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-cyan-500/25"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="socials" className="py-32 px-4 relative">
        <ParallaxSection speed={0.1}>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </ParallaxSection>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <ScrollAnimation>
            <h2 className="text-5xl md:text-7xl font-bold mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              CONNECT TO THE SYSTEM
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { name: "TELEGRAM", href: "#" },
                { name: "X", href: "#" },
                { name: "DEXTOOLS", href: "#" },
                { name: "DEXSCREENER", href: "#" },
              ].map((social, index) => (
                <ScrollAnimation key={social.name} delay={index * 100}>
                  <InteractiveButton
                    className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-cyan-600 hover:to-blue-600 text-white border-0 p-6 text-lg font-bold"
                    href={social.href}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <span>{social.name}</span>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </InteractiveButton>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-xl text-gray-400">© 2025 JARVIS - The Future is Now</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
