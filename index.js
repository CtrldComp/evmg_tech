export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-6">
      <h1 className="text-5xl font-bold mb-6">EVMG Technologies</h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl">
        Strategic Creative Collective — powering digital sovereignty, automation, and storytelling.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 max-w-4xl w-full">
        <div className="p-6 bg-gray-800 rounded-xl">
          <h2 className="font-semibold text-xl">ARIA™ Sovereign Architecture™</h2>
          <p className="text-gray-400 mt-2">A multi-generational digital legacy framework — uniting cultural depth with technological sovereignty.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl">
          <h2 className="font-semibold text-xl">Union Trust Systems™</h2>
          <p className="text-gray-400 mt-2">A blockchain-powered wealth management system designed for secure, transparent, and sovereign financial operations.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl">
          <h2 className="font-semibold text-xl">Archway Elite Automations (AeA)™</h2>
          <p className="text-gray-400 mt-2">Autonomous AI agents driving next-generation workflow intelligence, enterprise automation, and operational optimization.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl">
          <h2 className="font-semibold text-xl">NeoVerse™</h2>
          <p className="text-gray-400 mt-2">A Web3-native digital storytelling ecosystem — blending brand, culture, and blockchain-powered community engagements.</p>
        </div>
      </div>
    </main>
  )
}