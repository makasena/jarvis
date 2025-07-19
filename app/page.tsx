import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Rocket, Brain, Shield, Zap, Users, Target } from "lucide-react"

export default function ElonGrokCompanion() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Live on Base Network badge */}
        <Badge className="mb-8 bg-blue-600/20 text-blue-400 border-blue-500/30 px-4 py-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
          LIVE ON BASE NETWORK
        </Badge>

        {/* Portrait Section */}
        <div className="mb-12 relative">
          <div className="w-80 h-80 md:w-96 md:h-96 mx-auto rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
            <Image
              src="/images/elon-portrait-updated.png"
              alt="Elon Musk Portrait - Grok Companion"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Subtitle */}
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6 max-w-4xl">
          The Most <span className="text-blue-400">Advanced</span> AI Companion on Base Network
        </h3>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-3xl leading-relaxed">
          Where Elon's vision meets Grok's intelligence on the blockchain. This isn't just another token - it's the
          future of AI companionship.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 items-center">
          {" "}
          {/* Added items-center for centering */}
          <a
            href="https://ape.store/base/0x296fa4db85433ed0e9cf9891f114e601a98dfa68"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40"
            >
              <Rocket className="w-5 h-5 mr-2" />
              BUY ON APE STORE
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
          <p className="text-white text-sm mt-2">CA : 0x296fa4db85433ed0e9cf9891f114e601a98dfa68</p>{" "}
          {/* Updated the text */}
        </div>

        {/* Hero Banner */}
        <div className="mb-20 relative">
          <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
            <Image
              src="/images/elon-banner-updated.png"
              alt="Elon Grok Companion - AI Powered Banner"
              width={1200}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* About Section */}
        <section className="w-full max-w-6xl mx-auto mb-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="text-blue-400">Elon Grok</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-400">
                  <Brain className="w-6 h-6" />
                  AI Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Combining Elon Musk's visionary approach with Grok's advanced AI capabilities, creating the most
                  sophisticated AI companion on Base Network. Experience the future of digital interaction.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-400">
                  <Shield className="w-6 h-6" />
                  Secure & Decentralized
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Built on Base Network for maximum security and decentralization. Your AI companion operates
                  transparently on the blockchain with community governance and ownership.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full max-w-6xl mx-auto mb-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Key <span className="text-blue-400">Features</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-black/50 border-blue-500/30 text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-blue-400">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Instant AI responses powered by advanced algorithms and Base Network's high-speed infrastructure.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-blue-500/30 text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-blue-400">Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Governed by the community with voting rights and decision-making power for all token holders.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-blue-500/30 text-center">
              <CardHeader>
                <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-blue-400">Mission Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Dedicated to advancing AI technology and making it accessible to everyone through blockchain
                  innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section className="w-full max-w-6xl mx-auto mb-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-blue-400">Tokenomics</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-blue-400">Token Distribution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-white">Total Supply:</span>
                  <span className="text-white font-bold">1,000,000,000 ELON</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Liquidity Pool:</span>
                  <span className="text-white">80%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Development:</span>
                  <span className="text-white">10%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Marketing:</span>
                  <span className="text-white">5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Team:</span>
                  <span className="text-white">5%</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-blue-400">Token Utility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white">AI Companion Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white">Governance Voting Rights</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white">Premium Features Unlock</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white">Staking Rewards</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white">Community Events Access</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="w-full max-w-6xl mx-auto mb-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-blue-400">Roadmap</span>
          </h2>
          <div className="space-y-8">
            <Card className="bg-black/50 border-blue-500/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  Phase 1: Launch (Q1 2025) - COMPLETED
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Token Launch on Base Network</li>
                  <li>• Initial Liquidity Pool Creation</li>
                  <li>• Community Building</li>
                  <li>• Basic AI Companion Features</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-blue-500/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  Phase 2: Enhancement (Q2 2025) - IN PROGRESS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Advanced AI Capabilities</li>
                  <li>• Mobile App Development</li>
                  <li>• Partnership Announcements</li>
                  <li>• Staking Platform Launch</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-blue-500/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  Phase 3: Expansion (Q3 2025) - UPCOMING
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Multi-chain Integration</li>
                  <li>• NFT Collection Launch</li>
                  <li>• DAO Governance Implementation</li>
                  <li>• Launch DEX</li>
                  <li>• Enterprise Partnerships</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-blue-500/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  Phase 4: Revolution (Q4 2025) - PLANNED
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• AI Marketplace Launch</li>
                  <li>• Global Marketing Campaign</li>
                  <li>• Major Exchange Listings (CEX)</li>
                  <li>• Metaverse Integration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Join Community Section */}
        <section className="w-full max-w-6xl mx-auto mb-20 px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Join Our <span className="text-blue-400">Community</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Connect with fellow enthusiasts and stay updated on the latest news and developments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://t.me/eloncompanion"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 9.728-.896 9.728-.384 3.24-1.43 3.802-2.337 3.963-.77.136-1.355-.52-2.124-1.08-.359-.26-6.202-3.924-6.202-3.924s-.715-.446-.78-1.402c-.078-1.148.715-1.749.715-1.749s5.818-5.396 5.818-5.396s.39-.312.39-.624c0-.312-.39-.624-.39-.624s-6.169 4.624-6.169 4.624-.78.52-2.337.078c-1.557-.442-3.37-1.04-3.37-1.04s-1.245-.78.884-1.612c0 0 10.884-4.368 14.821-5.564 1.687-.52 2.337.26 2.337.26z" />
              </svg>
              Join Telegram
            </a>
            <a
              href="https://x.com/companionelon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-white text-white hover:bg-blue-900 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent border"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow Twitter
            </a>
          </div>
        </section>

        {/* Footer message */}
        <div className="text-center pb-8">
          <h4 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">
            Welcome to the Future of AI Companionship
          </h4>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto mb-2">
            Join the revolution where artificial intelligence meets blockchain technology. Built by innovators, for the
            next generation of digital interaction.
          </p>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Elon Grok Companion. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
