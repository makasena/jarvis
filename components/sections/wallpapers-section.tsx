import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function WallpapersSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-red-950 to-blue-950 text-center">
      <div className="relative z-10 bg-blue-900 bg-opacity-70 border-4 border-blue-500 p-8 rounded-lg max-w-4xl mx-auto shadow-lg mb-12">
        <h2 className="text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">WALLPAPERS</h2>
        <p className="text-lg text-gray-200 mb-8">Download exclusive TANUKI wallpapers and rep the brand.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative bg-black border-4 border-blue-500 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/tanuki-hat.png"
              alt="Tanuki Wallpaper 1"
              width={600}
              height={400}
              objectFit="cover"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 flex justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download
              </Button>
            </div>
          </div>
          <div className="relative bg-black border-4 border-blue-500 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/tanuki-head.png"
              alt="Tanuki Wallpaper 2"
              width={600}
              height={400}
              objectFit="cover"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 flex justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
