'use client';

import { Game } from "@/types/Game";
import { GameSummary } from "@/types/FavouritesType";
import CardComponent from "./CardComponent";

interface RecentlyPlayedProps {
  allGames: Game[];
  recentlyPlayed: GameSummary[];
  selectedCategory: string | null;
  search: string;
}

const RecentlyPlayed: React.FC<RecentlyPlayedProps> = ({
  allGames,
  recentlyPlayed,
  selectedCategory,
  search,
}) => {
  const gamesToDisplay = recentlyPlayed
    .map((summary) => allGames.find((game) => game.id === summary.id))
    .filter((game): game is Game => !!game) 
    .filter((game) => {
      const matchesCategory = selectedCategory ? game.category === selectedCategory : true;
      const matchesSearch = game.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .slice(0, 4); 

  if (gamesToDisplay.length === 0) return null;

  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold light:text-black mb-4">Recently Played</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
        {gamesToDisplay.map((game) => (
          <CardComponent key={game.id} game={game} />
        ))}
      </div>
      <hr className="border-t border-zinc-300 dark:border-zinc-700" />
    </div>
  );
};

export default RecentlyPlayed;
