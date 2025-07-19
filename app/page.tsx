import Image from "next/image"
import { CheckCircleIcon, RocketIcon, UsersIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-blue-900/80 backdrop-blur-sm py-3 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/images/tanuki-logo.png" alt="Tanuki Logo" width={40} height={40} className="rounded-full" />
          <span className="text-xl font-bold text-white">TANUKI</span>
        </div>
        {/* You can add navigation links here if needed */}
      </header>

      {/* Hero Section */}
      <section className="relative flex h-[600px] items-center justify-center overflow-hidden text-center md:h-[700px] lg:h-[800px]">
        <Image
          src="/images/tanuki-hero.jpeg"
          alt="A mythical meme tanuki with a friendly smile and a straw hat"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 opacity-70"
        />
        <div className="relative z-10 space-y-4 p-4 backdrop-blur-sm bg-black/30 rounded-lg">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-lg">
            TANUKI
          </h1>
          <p className="text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto drop-shadow-md">
            A yokai from ancient Japan. A meme from the edge of the world. A spirit of chaos, luck, and laughter, now
            on-chain.
          </p>
        </div>
      </section>

      {/* About/Lore Section */}
      <section className="py-16 px-4 md:py-24 lg:py-32 bg-white text-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl md:text-6xl text-blue-600">
            The Legend of Tanuki
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/tanuki-ramen.jpeg"
                alt="Tanuki eating ramen"
                width={400}
                height={400}
                className="mb-6 h-64 w-64 rounded-full object-cover shadow-lg"
              />
              <h3 className="mb-4 text-2xl font-semibold text-cyan-600">Spirit of Laughter</h3>
              <p className="text-lg leading-relaxed">
                With a friendly smile and a love for good food, Tanuki brings joy and laughter wherever he goes. He's a
                master of disguise and a connoisseur of fine ramen.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/tanuki-guns.jpeg"
                alt="Tanuki with guns"
                width={400}
                height={400}
                className="mb-6 h-64 w-64 rounded-full object-cover shadow-lg"
              />
              <h3 className="mb-4 text-2xl font-semibold text-cyan-600">Embodiment of Chaos</h3>
              <p className="text-lg leading-relaxed">
                Don't let the smile fool you; Tanuki is also a spirit of delightful chaos. He's unpredictable, bold, and
                always ready for an adventure, often leaving a trail of coins in his wake.
              </p>
            </div>
            <div className="flex flex-col items-center text-center lg:col-span-1 md:col-span-2">
              <Image
                src="/images/tanuki-balls.jpeg"
                alt="Tanuki with big balls"
                width={400}
                height={400}
                className="mb-6 h-64 w-64 rounded-full object-cover shadow-lg"
              />
              <h3 className="mb-4 text-2xl font-semibold text-cyan-600">Bearer of Luck and Fortune</h3>
              <p className="text-lg leading-relaxed">
                Known for his legendary "big balls," Tanuki symbolizes prosperity, good fortune, and the courage to face
                any challenge. He's a true icon of resilience and abundance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 px-4 md:py-24 lg:py-32 bg-blue-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl md:text-6xl text-white">Roadmap</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 bg-blue-700 rounded-lg shadow-lg">
              <RocketIcon className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="mb-2 text-2xl font-semibold">Phase 1: Launch & Awareness</h3>
              <p className="text-lg leading-relaxed">
                Official launch of TANUKI token, initial marketing campaigns, and community building on social
                platforms.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-blue-700 rounded-lg shadow-lg">
              <UsersIcon className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="mb-2 text-2xl font-semibold">Phase 2: Community & Utility</h3>
              <p className="text-lg leading-relaxed">
                Establishment of community governance, development of initial utility features, and partnerships.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-blue-700 rounded-lg shadow-lg">
              <CheckCircleIcon className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="mb-2 text-2xl font-semibold">Phase 3: Ecosystem Expansion</h3>
              <p className="text-lg leading-relaxed">
                Introduction of advanced dApps, cross-chain integrations, and expansion into new markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-16 px-4 md:py-24 lg:py-32 bg-white text-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl md:text-6xl text-blue-600">Tokenomics</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <Image
                src="/images/tanuki-balls.jpeg"
                alt="Tanuki with big balls, symbolizing abundance"
                width={400}
                height={400}
                className="mx-auto lg:mx-0 rounded-full object-cover shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <p className="text-lg leading-relaxed">
                TANUKI is designed with a fair and transparent distribution model to ensure long-term sustainability and
                community growth.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <span className="font-bold text-blue-600">Total Supply:</span> 1,000,000,000 TANUKI
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold text-blue-600">Liquidity Pool:</span> 50%
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold text-blue-600">Marketing & Development:</span> 20%
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold text-blue-600">Community Rewards:</span> 15%
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold text-blue-600">Team & Advisors:</span> 10% (vested)
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold text-blue-600">Airdrops & Partnerships:</span> 5%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 py-8 text-center text-gray-300">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} TANUKI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
