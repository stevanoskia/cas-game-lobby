"use client";

import { Game } from "@/types/Game";
import Button from "./Button";
import { useGameActions } from "@/context/FavouritesContext";
import Image from "next/image";
import { useTheme } from "../hooks/useTheme";

function CardComponent({ game }: { game: Game }) {
  const { favorites, toggleFavorite, addToHistory } = useGameActions();
  const isFavorited = favorites.includes(game.id);

  const {isDark, theme, setTheme, mounted} = useTheme();
  if (!mounted) return null; 

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 ${isDark ? "bg-zinc-500" : "bg-white"}`}>
      <Image
        src={game.image}
        alt={game.name}
        width={400}
        height={200}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-black dark:text-white text-lg font-semibold">
            {game.name}
          </h3>
          <Button
            variant="icon"
            icon="heart"
            active={isFavorited}
            onClick={() => toggleFavorite(game.id)}
          />
        </div>
        <p className="text-sm text-zinc-600">{game.provider}</p>
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
