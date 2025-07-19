import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Twitter, TextIcon as Telegram, DiscIcon as Discord, Youtube, Instagram } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <Image
          src="/placeholder.svg"
          alt="Tanuki Coin Logo"
          width={40}
          height={40}
          className="rounded-full border-2 border-blue-500"
        />
        <span className="sr-only">Tanuki Coin</span>
      </Link>
      <nav className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-white hover:text-blue-500">
          <Twitter className="h-6 w-6" />
          <span className="sr-only">Twitter</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:text-blue-500">
          <Telegram className="h-6 w-6" />
          <span className="sr-only">Telegram</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:text-blue-500">
          <Discord className="h-6 w-6" />
          <span className="sr-only">Discord</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:text-blue-500">
          <Youtube className="h-6 w-6" />
          <span className="sr-only">Youtube</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:text-blue-500">
          <Instagram className="h-6 w-6" />
          <span className="sr-only">Instagram</span>
        </Button>
      </nav>
    </header>
  )
}
