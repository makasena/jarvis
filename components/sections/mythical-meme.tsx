import Image from "next/image"

export function MythicalMemeSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-blue-950 text-center">
      <div className="relative z-10 bg-blue-900 bg-opacity-70 border-4 border-blue-500 p-8 rounded-lg max-w-4xl mx-auto shadow-lg mb-12">
        <h2 className="text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">MYTHICAL MEME</h2>
        <p className="text-lg text-gray-200">
          The Tanuki (狸 or タヌキ) is a creature from Japanese folklore, based on the real-life Japanese raccoon dog.
          He&apos;s a badass shape-shifting yokai (supernatural being) known for mischief, transformation, and uncanny
          humor. Now he&apos;s here to take the blockchain by storm. Check out four things you need to know about him 👇
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="relative bg-black border-4 border-blue-500 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/swirl-pattern.png"
            alt="Swirling background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0 opacity-70"
          />
          <div className="relative z-10 p-8 flex flex-col items-center justify-center h-full">
            <h3
              className="text-6xl font-extrabold text-white mb-4 uppercase"
              style={{
                WebkitTextStroke: "2px #0000FF",
                textStroke: "2px #0000FF",
                textShadow: "0 0 10px rgba(0,0,255,0.8)",
              }}
            >
              狸
            </h3>
            <Image src="/images/tanuki-head.png" alt="Tanuki Head" width={200} height={200} className="animate-float" />
          </div>
        </div>
        <div className="relative bg-black border-4 border-blue-500 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/swirl-pattern.png"
            alt="Swirling background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0 opacity-70"
          />
          <div className="relative z-10 p-8 flex flex-col items-center justify-center h-full">
            <h3
              className="text-6xl font-extrabold text-white mb-4 uppercase"
              style={{
                WebkitTextStroke: "2px #0000FF",
                textStroke: "2px #0000FF",
                textShadow: "0 0 10px rgba(0,0,255,0.8)",
              }}
            >
              タヌキ
            </h3>
            <Image
              src="/images/tanuki-head.png"
              alt="Tanuki Head"
              width={200}
              height={200}
              className="animate-float delay-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
