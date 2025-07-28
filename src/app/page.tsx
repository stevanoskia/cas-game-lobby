import { games } from "@/api/mock-games-api";

export default function HomePage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
        A casino you can trust
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-white text-lg font-semibold">{game.name}</h3>
              <p className="text-sm text-zinc-400">{game.provider}</p>
              <button className="relative overflow-hidden mt-2 w-full py-2 text-sm sm:text-base rounded-lg bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition cursor-pointer group">
                <span className="relative z-10">Play</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-shine z-0 pointer-events-none" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
