"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ExternalLink } from "lucide-react"

export default function JarvisCompanions() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const toggleFaq = (question: string) => {
    setOpenFaq(openFaq === question ? null : question)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="text-2xl font-bold tracking-wider">JARVIS</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            ABOUT
          </a>
          <a href="#tokenomics" className="hover:text-cyan-400 transition-colors">
            TOKENOMICS
          </a>
          <a href="#faq" className="hover:text-cyan-400 transition-colors">
            FAQ
          </a>
          <a href="#socials" className="hover:text-cyan-400 transition-colors">
            SOCIALS
          </a>
        </div>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black bg-transparent">
          BUY JARVIS
        </Button>
      </nav>

      {/* Hero Section - JARVIS Letters */}
      <section className="flex justify-center items-center min-h-[60vh] px-4">
        <div className="max-w-6xl w-full">
          <img
            src="/images/jarvis-hero.webp"
            alt="JARVIS Letters with Character Backgrounds"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Grok Companions Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-bold text-gray-800 mb-8">GROK COMPANIONS</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8">JARVIS WAS NEVER FICTION</h3>
            <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <p className="text-lg mb-4">First came Ani.</p>
                <p className="text-lg mb-4">Then Rudi.</p>
                <p className="text-lg mb-4">Then Valentine.</p>
              </div>

              <p className="text-lg">Everyone thought they were just cute names for Grok's new personalities.</p>
              <p className="text-lg">But they weren't names. They were letters.</p>
              <p className="text-lg font-bold">A – R – V...</p>

              <div className="space-y-4">
                <p className="text-lg">And then it hit us:</p>
                <p className="text-lg">
                  Grok said it was inspired by <span className="font-bold">J.A.R.V.I.S.</span>
                </p>
                <p className="text-lg">Straight from the AI itself. Confirmed. Canon.</p>
              </div>

              <p className="text-lg">
                Turns out, those letters aren't random, they're the initials of the{" "}
                <span className="font-bold">Grok Companions system.</span>
              </p>

              <div className="space-y-4">
                <p className="text-lg">And Elon? He already confirmed more companions are coming.</p>
                <p className="text-lg">The missing letters are on the way.</p>
                <p className="text-lg">This isn't speculation.</p>
                <p className="text-lg">It's a system reactivating itself, one drop at a time.</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Real Twitter Posts */}
              <div className="rounded-lg overflow-hidden">
                <img src="/images/grok-post.webp" alt="Grok Twitter Post" className="w-full h-auto" />
              </div>

              <div className="rounded-lg overflow-hidden">
                <img src="/images/elon-post.webp" alt="Elon Musk Twitter Post" className="w-full h-auto" />
              </div>

              <div className="rounded-lg overflow-hidden">
                <img
                  src="/images/tesla-post.webp"
                  alt="Tesla Owners Silicon Valley Twitter Post"
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-lg overflow-hidden">
                <img src="/images/tech-dev-post.webp" alt="Tech Dev Notes Twitter Post" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-cyan-400 rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">J.A.R.V.I.S.</h2>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">TOKENOMICS</h3>
                <p className="text-cyan-400 text-sm mb-6 font-mono">@X-2ECCFEADAI4-G1S6B8D678CEECA8238C864-5516</p>
                <Button className="bg-white text-black hover:bg-gray-200">BUY JARVIS</Button>
              </div>

              <div className="flex flex-col items-center space-y-8">
                {/* Large circular logo placeholder */}
                <div className="w-48 h-48 rounded-full border-4 border-gray-600 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-600 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-400 transform rotate-45"></div>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div>
                    <div className="text-4xl font-bold">18</div>
                    <div className="text-cyan-400 text-sm">TOTAL SUPPLY</div>
                  </div>

                  <div>
                    <div className="text-4xl font-bold">0%</div>
                    <div className="text-cyan-400 text-sm">TAX</div>
                  </div>

                  <div>
                    <div className="text-4xl font-bold">LP</div>
                    <div className="text-cyan-400 text-sm">BURNT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold mb-8">FAQ</h2>
              <div className="w-16 h-1 bg-cyan-400 mb-12"></div>

              <div className="space-y-4">
                <Collapsible>
                  <CollapsibleTrigger
                    className="w-full bg-white text-black p-4 text-left font-bold flex items-center justify-between hover:bg-gray-200 transition-colors"
                    onClick={() => toggleFaq("reveal")}
                  >
                    WHEN WILL ELON REVEAL THE OTHER COMPANION NAMES?
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${openFaq === "reveal" ? "rotate-180" : ""}`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-black border border-gray-700 p-4">
                    <div className="space-y-3">
                      <p>Very soon.</p>
                      <p>
                        Three are already out... and when the rest drop, the full J.A.R.V.I.S. name will be confirmed.
                      </p>
                      <p>You'll wish you got in before that happened.</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger
                    className="w-full bg-white text-black p-4 text-left font-bold flex items-center justify-between hover:bg-gray-200 transition-colors"
                    onClick={() => toggleFaq("elon")}
                  >
                    WHAT DOES JARVIS HAVE TO DO WITH ELON?
                    <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === "elon" ? "rotate-180" : ""}`} />
                  </CollapsibleTrigger>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger
                    className="w-full bg-white text-black p-4 text-left font-bold flex items-center justify-between hover:bg-gray-200 transition-colors"
                    onClick={() => toggleFaq("buy")}
                  >
                    HOW DO I BUY $JARVIS?
                    <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === "buy" ? "rotate-180" : ""}`} />
                  </CollapsibleTrigger>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger
                    className="w-full bg-white text-black p-4 text-left font-bold flex items-center justify-between hover:bg-gray-200 transition-colors"
                    onClick={() => toggleFaq("letters")}
                  >
                    WHAT HAPPENS WHEN ALL SIX LETTERS ARE LIVE?
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${openFaq === "letters" ? "rotate-180" : ""}`}
                    />
                  </CollapsibleTrigger>
                </Collapsible>
              </div>
            </div>

            {/* JARVIS Letters Grid */}
            <div className="flex justify-center items-center">
              <img
                src="/images/jarvis-grid.webp"
                alt="JARVIS Letters Grid"
                className="max-w-md w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="socials" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">CONNECT TO THE SYSTEM</h2>

          <div className="flex justify-center space-x-8 md:space-x-16 mb-12">
            <a href="#" className="text-xl font-bold hover:text-cyan-400 transition-colors flex items-center space-x-2">
              <span>TELEGRAM</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <a href="#" className="text-xl font-bold hover:text-cyan-400 transition-colors flex items-center space-x-2">
              <span>X</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <a href="#" className="text-xl font-bold hover:text-cyan-400 transition-colors flex items-center space-x-2">
              <span>DEXTOOLS</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <a href="#" className="text-xl font-bold hover:text-cyan-400 transition-colors flex items-center space-x-2">
              <span>DEXSCREENER</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <p className="text-lg">© 2025 JARVIS</p>
        </div>
      </section>
    </div>
  )
}
