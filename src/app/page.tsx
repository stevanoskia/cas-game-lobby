import { games } from "@/api/mock-games-api";
export default function HomePage() {
  return (
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">Casino Games</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">A casino you can trust</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1"
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-white text-lg font-semibold">{game.name}</h3>
                <p className="text-sm text-zinc-400">{game.provider}</p>
                <button className="mt-2 w-full py-2 rounded-lg bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition cursor-pointer">
                  Play
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}