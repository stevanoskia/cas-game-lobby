import { games } from "@/api/mock-games-api";
import GameLobby from "@/components/GameLobby";

export default function HomePage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 min-h-screen transition-colors">  
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        A casino you can trust
      </h2>
      <GameLobby games={games} />
    </div>
  );
}