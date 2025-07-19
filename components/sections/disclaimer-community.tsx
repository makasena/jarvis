import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import Image from "next/image"

export function DisclaimerCommunity() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-black flex flex-col lg:flex-row items-center justify-center gap-12">
      <div className="relative z-10 bg-blue-900 bg-opacity-70 border-4 border-blue-500 p-8 rounded-lg max-w-2xl text-center lg:text-left shadow-lg">
        <p className="text-sm text-gray-200">
          Disclaimer: $TANUKI has no inherent value and is a community-driven token. Any value attributed to $TANUKI is
          solely determined by the community, its art, culture, and collective engagement. This is not financial advice.
        </p>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg flex items-center gap-2 shadow-lg">
          <Send className="h-6 w-6" />
          JOIN THE COMMUNITY
        </Button>
        <Image src="/images/tanuki-coin.png" alt="Tanuki Coin" width={150} height={150} className="animate-spin-slow" />
      </div>
    </section>
  )
}
