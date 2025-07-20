"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Zap, Shield, ArrowRight, Download, MessageCircle } from "lucide-react"
import { ChatModal } from "@/components/chat-modal"

export default function BabyGrokWebsite() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-blue-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/baby-grok-new-icon.png"
              alt="Baby Grok Icon"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-white font-bold text-xl">Baby Grok</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-blue-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#about" className="text-blue-300 hover:text-white transition-colors">
              About
            </a>
            <Button
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="relative mb-8">
            <Image
              src="/images/baby-grok-banner.jpg"
              alt="Baby Grok AI Assistant"
              width={1200}
              height={400}
              className="rounded-2xl shadow-2xl mx-auto"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Meet{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Baby Grok
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Your friendly AI companion on Base Network. Combining advanced intelligence with blockchain technology for
              a secure, decentralized experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => setIsChatOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-black font-semibold px-8 py-3"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Baby Grok
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-3 bg-transparent"
              >
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-blue-400">Baby Grok?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experience AI assistance like never before with our unique blend of intelligence and personality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
                <p className="text-blue-100">
                  Get instant responses to your queries with our optimized AI engine that processes information at
                  incredible speeds.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Secure & Private</h3>
                <p className="text-blue-100">
                  Your conversations are protected with enterprise-grade security. We prioritize your privacy above all
                  else.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Playful Intelligence</h3>
                <p className="text-blue-100">
                  Enjoy AI assistance with personality. Baby Grok makes learning and problem-solving fun and engaging.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Future of <span className="text-blue-400">Decentralized AI</span>
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Baby Grok represents a new generation of AI assistants built on Base Network, combining cutting-edge
                artificial intelligence with blockchain technology. Our mission is to create a decentralized,
                community-owned AI that's accessible to everyone.
              </p>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Experience the power of AI without centralized control. Baby Grok runs on Base Network, ensuring
                transparency, security, and true ownership of your AI interactions.
              </p>
              <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-black font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-2xl blur-xl"></div>
              <Image
                src="/images/baby-grok-icon.jpg"
                alt="Baby Grok App Icon"
                width={400}
                height={400}
                className="relative rounded-2xl shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/40 border-t border-blue-500/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/baby-grok-new-icon.png"
                alt="Baby Grok Icon"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-white font-bold text-xl">Baby Grok</span>
              <p className="text-blue-100 text-sm">Your friendly AI companion for the digital age.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-500/20 mt-8 pt-8 text-center">
            <p className="text-blue-100 text-sm">
              © 2024 Baby Grok. All rights reserved. Made with 💚 for the AI community.
            </p>
          </div>
        </div>
      </footer>

      {/* Chat Modal */}
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}
