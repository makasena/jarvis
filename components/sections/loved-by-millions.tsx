import Image from "next/image"

export function LovedByMillionsSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-black flex flex-col lg:flex-row items-center justify-center gap-12">
      <div className="relative z-10 flex-shrink-0">
        <Image
          src="/images/tanuki-standing.png"
          alt="Tanuki Character"
          width={400}
          height={400}
          className="animate-float"
        />
      </div>
      <div className="relative z-10 bg-blue-900 bg-opacity-70 border-4 border-blue-500 p-8 rounded-lg max-w-3xl text-center lg:text-left shadow-lg">
        <h2 className="text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">LOVED BY MILLIONS</h2>
        <p className="text-lg text-gray-200 mb-6">
          Adored by millions across the East for centuries. From ancient scrolls of the 8th century to modern-day
          folklore, his legend has endured. Now, he's ready to charm the entire world.
        </p>
        <p className="text-lg text-gray-200 mt-4 font-bold italic">A symbol of fortune, humour and fun. Ballsy.</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end z-0 opacity-50">
        <Image src="/images/red-ball.png" alt="Red Ball" width={150} height={150} className="animate-pulse-slow" />
        <Image src="/images/iou-bottle.png" alt="IOU Bottle" width={100} height={150} className="animate-float-alt" />
        <Image
          src="/images/red-ball.png"
          alt="Red Ball"
          width={200}
          height={200}
          className="animate-pulse-slow delay-200"
        />
        <Image
          src="/images/iou-bottle.png"
          alt="IOU Bottle"
          width={120}
          height={180}
          className="animate-float-alt delay-300"
        />
        <Image
          src="/images/red-ball.png"
          alt="Red Ball"
          width={180}
          height={180}
          className="animate-pulse-slow delay-400"
        />
      </div>
    </section>
  )
}
