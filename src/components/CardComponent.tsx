'use client'

import { Game } from "@/types/Game"
import Button from "./Button"

function CardComponent({ game }: { game: Game }) {
  return (
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
              <Button onClick={() => console.log(`Playing ${game.name}`)}>Play</Button>
            </div>
          </div>
  )
}

export default CardComponent