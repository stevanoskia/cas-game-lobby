"use client";

import { Game } from "@/types/Game";
import Button from "./Button";
import { useGameActions } from "@/context/FavouritesContext";

function CardComponent({ game }: { game: Game }) {
  const { favorites, toggleFavorite, addToHistory } = useGameActions();
  const isFavorited = favorites.includes(game.id);

  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2">
      <img
        src={game.image}
        alt={game.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-white text-lg font-semibold">{game.name}</h3>
          <Button
            variant="icon"
            icon="heart"
            active={isFavorited}
            onClick={() => toggleFavorite(game.id)}
          />
        </div>
        <p className="text-sm text-zinc-400">{game.provider}</p>
        <Button
          onClick={() => {
            addToHistory({ id: game.id, name: game.name });
          }}
        >
          Play
        </Button>
      </div>
    </div>
  );
}

export default CardComponent;
