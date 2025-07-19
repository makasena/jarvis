import Image from "next/image"

export function HowToBuySection() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-black text-center">
      <div className="flex justify-center gap-4 mb-12">
        <Image
          src="/images/tanuki-head.png"
          alt="Tanuki Head"
          width={100}
          height={100}
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
        <Image
          src="/images/tanuki-head.png"
          alt="Tanuki Head"
          width={100}
          height={100}
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
        <Image
          src="/images/tanuki-head.png"
          alt="Tanuki Head"
          width={100}
          height={100}
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
        <Image
          src="/images/tanuki-head.png"
          alt="Tanuki Head"
          width={100}
          height={100}
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
        <Image
          src="/images/tanuki-head.png"
          alt="Tanuki Head"
          width={100}
          height={100}
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <div className="relative z-10 bg-blue-900 bg-opacity-70 border-4 border-blue-500 p-8 rounded-lg max-w-4xl mx-auto shadow-lg mb-12">
        <h2 className="text-4xl font-extrabold text-white mb-8 uppercase tracking-wide">HOW TO BUY</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6 text-left">
            <div className="bg-black border-2 border-blue-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Step 1: Connect Your Wallet</h3>
              <p className="text-gray-200">
                Connect your Web3 wallet such as MetaMask, WalletConnect, or any compatible wallet to get started with
                trading.
              </p>
            </div>
            <div className="bg-black border-2 border-blue-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Step 2: Ensure You Have Funds</h3>
              <p className="text-gray-200">
                Make sure you have the ETH in your wallet. You can purchase ETH directly through exchanges or transfer
                from other wallets.
              </p>
            </div>
            <div className="bg-black border-2 border-blue-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Step 3: Choose Your Trading Platform</h3>
              <p className="text-gray-200">
                Select a decentralized exchange (DEX) that supports the tokens you want to trade. Popular options
                include Uniswap, SushiSwap, and others.
              </p>
            </div>
            <div className="bg-black border-2 border-blue-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Step 4: Execute Your Trade</h3>
              <p className="text-gray-200">
                Once connected, you can swap between different tokens. Always check the exchange rate and slippage
                before confirming your transaction.
              </p>
            </div>
          </div>
          <div className="relative bg-black border-4 border-blue-500 rounded-lg flex items-center justify-center min-h-[300px] lg:min-h-full">
            <Image
              src="/images/tanuki-head.png"
              alt="Tanuki Placeholder"
              width={200}
              height={200}
              className="opacity-20"
            />
            <span className="sr-only">Placeholder for video or image</span>
          </div>
        </div>
      </div>
    </section>
  )
}
