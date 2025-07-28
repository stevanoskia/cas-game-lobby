'use client';

import { Game } from "@/types/Game";
import { useMemo, useEffect, useState, useRef } from "react";
import Filter from "./Filter";
import CardComponent from "./CardComponent";
import { useGameFilter } from "@/context/FilterContext";
import { useGameActions } from "@/context/FavouritesContext";

interface GameLobbyProps {
  games: Game[];
}

const GameLobby: React.FC<GameLobbyProps> = ({ games }) => {
  const { search, selectedCategory, showFavoritesOnly } = useGameFilter();
  const { favorites } = useGameActions();
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const isFirstRender = useRef(true);

  // Debounce input
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  // Apply search & category filters
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch = game.name.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesCategory = selectedCategory ? game.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [games, debouncedSearch, selectedCategory]);

  // Separate favorites and others
  const favoriteGames = useMemo(
    () => filteredGames.filter((game) => favorites.includes(game.id)),
    [filteredGames, favorites]
  );

  const nonFavoriteGames = useMemo(
    () => filteredGames.filter((game) => !favorites.includes(game.id)),
    [filteredGames, favorites]
  );

  return (
    <div className="space-y-6">
      <Filter />

      {filteredGames.length === 0 ? (
        <p className="text-center text-zinc-400 mt-8">No games found.</p>
      ) : (
        <>
          {/* ✅ Show only favorites if toggled */}
          {showFavoritesOnly ? (
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Favorite Games</h3>
              {favoriteGames.length === 0 ? (
                <p className="text-zinc-400">No favorites match the current filters.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {favoriteGames.map((game) => (
                    <CardComponent key={game.id} game={game} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <>
              {/* ✅ Show favorites section if there are any */}
              {favoriteGames.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Favorite Games</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                    {favoriteGames.map((game) => (
                      <CardComponent key={game.id} game={game} />
                    ))}
                  </div>
                </div>
              )}

              {/* ✅ Show rest of the filtered games */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">All Games</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {nonFavoriteGames.map((game) => (
                    <CardComponent key={game.id} game={game} />
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default GameLobby;
