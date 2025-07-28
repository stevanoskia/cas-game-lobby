'use client';

import { Game } from "@/types/Game";
import { useMemo, useEffect, useState } from "react";
import Filter from "./Filter";
import CardComponent from "./CardComponent";
import { useGameFilter } from "@/context/FilterContext";

interface GameLobbyProps {
  games: Game[];
}

const GameLobby: React.FC<GameLobbyProps> = ({ games }) => {
  const { search, selectedCategory } = useGameFilter();

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300); 

    return () => clearTimeout(timer);
  }, [search]);

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch = game.name.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesCategory = selectedCategory ? game.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [games, debouncedSearch, selectedCategory]);

  return (
    <div className="space-y-6">
      <Filter />

      {filteredGames.length === 0 ? (
        <p className="text-center text-zinc-400 mt-8">No games found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <CardComponent key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GameLobby;
