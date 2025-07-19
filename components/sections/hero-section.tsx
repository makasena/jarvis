import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-64px)] flex items-center justify-center text-center overflow-hidden pt-16">
      <Image
        src="/images/hero-background.png"
        alt="Stylized Japanese landscape"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4">
        <div className="relative mb-8">
          <h1
            className="text-8xl md:text-[12rem] lg:text-[18rem] font-extrabold text-white tracking-tighter leading-none drop-shadow-[0_0_10px_rgba(0,0,255,0.8)]"
            style={{
              WebkitTextStroke: "4px #0000FF", // Red stroke
              textStroke: "4px #0000FF",
              textShadow: "0 0 20px rgba(0,0,255,0.8)",
            }}
          >
            $TANUKI
          </h1>
          <Image
            src="/images/tanuki-head.png"
            alt="Tanuki Head"
            width={300}
            height={300}
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow"
          />
        </div>
        <Image
          src="/images/pagoda.png"
          alt="Japanese Pagoda"
          width={400}
          height={600}
          className="absolute right-10 bottom-0 z-10 hidden lg:block"
        />
        <div className="absolute bottom-0 left-0 right-0 text-center text-sm text-gray-400 pb-4">CA: 0xDb0...403A</div>
      </div>
    </section>
  )
}
