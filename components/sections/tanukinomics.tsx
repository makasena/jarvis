import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Flame } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function TanukinomicsSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-red-950 to-blue-950 text-center">
      <div className="relative z-10 bg-blue-900 bg-opacity-70 border-4 border-blue-500 p-8 rounded-lg max-w-4xl mx-auto shadow-lg mb-12">
        <h2 className="text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">TANUKINOMICS</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <Card className="bg-black border-2 border-blue-500 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold uppercase">CONTRACT</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <p className="text-4xl font-extrabold text-blue-400 mb-2">Renounced</p>
              <Link href="#" className="text-gray-400 hover:text-blue-500 flex items-center gap-1">
                View <ExternalLink className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-black border-2 border-blue-500 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold uppercase">SUPPLY</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <p className="text-4xl font-extrabold text-blue-400 mb-2">1 Billion</p>
            </CardContent>
          </Card>
          <Card className="bg-black border-2 border-blue-500 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold uppercase">LIQUIDITY</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <p className="text-4xl font-extrabold text-blue-400 mb-2 flex items-center gap-2">
                Burned <Flame className="h-8 w-8 text-orange-500" />
              </p>
              <Link href="#" className="text-gray-400 hover:text-blue-500 flex items-center gap-1">
                View <ExternalLink className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="relative mt-12">
        <Image
          src="/images/tanuki-head.png"
          alt="Tanuki Head"
          width={250}
          height={250}
          className="mx-auto animate-bounce-slow"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 border-4 border-white p-4 rounded-full shadow-lg animate-pulse-alt">
          <span className="text-white text-4xl font-extrabold uppercase whitespace-nowrap">BIG BALLS</span>
        </div>
      </div>
    </section>
  )
}
