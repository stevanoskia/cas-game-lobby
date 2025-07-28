import { games } from "@/api/mock-games-api";
import CardComponent from "@/components/CardComponent";

export default function HomePage() {

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">
        A casino you can trust
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <CardComponent key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
