import Image from "next/image"

export function WelcomeSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-red-950 to-blue-950 flex flex-col lg:flex-row items-center justify-center gap-12">
      <div className="relative z-10 bg-blue-900 bg-opacity-70 border-4 border-blue-500 p-8 rounded-lg max-w-3xl text-center lg:text-left shadow-lg">
        <h2 className="text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">WELCOME TO $TANUKI</h2>
        <p className="text-lg text-gray-200 mb-6">
          $TANUKI. A yokai from ancient Japan. A meme from the edge of the world. A spirit of{" "}
          <span className="text-yellow-300 font-bold">chaos</span>,{" "}
          <span className="text-yellow-300 font-bold">luck</span>, and{" "}
          <span className="text-yellow-300 font-bold">laughter</span>, now on-chain.
        </p>
        <p className="text-lg text-gray-200">
          For over a thousand years, the Tanuki has been Japan&apos;s most unpredictable spirit, a{" "}
          <span className="text-yellow-300 font-bold">lucky charm</span>, a{" "}
          <span className="text-yellow-300 font-bold">shape-shifter</span>, a{" "}
          <span className="text-yellow-300 font-bold">sake-lover</span>, and a walking contradiction. Known for turning
          leaves into <span className="text-yellow-300 font-bold">gold</span>, belly-slapping to summon storms, and
          tricking emperors out of their clothes, he was never feared, only followed.
        </p>
        <p className="text-lg text-gray-200 mt-4">
          $TANUKI revives that spirit for the modern age. Loved and renowned by{" "}
          <span className="text-yellow-300 font-bold">millions</span>. A symbol of laughter and{" "}
          <span className="text-yellow-300 font-bold">luck</span>. Giant balls. Disguises.
        </p>
        <p className="text-lg text-gray-200 mt-6 font-bold italic">
          Don&apos;t look for logic – look for <span className="text-yellow-300">movement</span>
        </p>
      </div>
      <div className="relative z-10 flex-shrink-0">
        <Image
          src="/images/tanuki-standing.png"
          alt="Tanuki Character"
          width={400}
          height={400}
          className="animate-float"
        />
      </div>
    </section>
  )
}
