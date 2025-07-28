'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { GameSummary, GameActionsContextType } from '@/types/FavouritesType';


const GameActionsContext = createContext<GameActionsContextType | undefined>(undefined);

const FAVORITES_KEY = 'favorites';
const HISTORY_KEY = 'recentGames';

export const GameActionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentGames, setRecentGames] = useState<GameSummary[]>([]);

  // ✅ Load on mount
  useEffect(() => {
    const fav = localStorage.getItem(FAVORITES_KEY);
    const hist = localStorage.getItem(HISTORY_KEY);

    if (fav) setFavorites(JSON.parse(fav));
    if (hist) setRecentGames(JSON.parse(hist));
  }, []);

  // ✅ Persist favorites
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  // ✅ Persist recent games + emit custom event
  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(recentGames));
    const event = new CustomEvent('recentGamesUpdated', { detail: recentGames });
    window.dispatchEvent(event);
  }, [recentGames]);

  // ✅ Listen for same-tab updates to recentGames
  useEffect(() => {
    const handleRecentGamesUpdated = (e: Event) => {
      const customEvent = e as CustomEvent<GameSummary[]>;
      console.log("🔄 Same-tab recent games update:", customEvent.detail);
    };

    window.addEventListener('recentGamesUpdated', handleRecentGamesUpdated);

    return () => {
      window.removeEventListener('recentGamesUpdated', handleRecentGamesUpdated);
    };
  }, []);

  const toggleFavorite = (gameId: string) => {
    setFavorites((prev) =>
      prev.includes(gameId) ? prev.filter((id) => id !== gameId) : [...prev, gameId]
    );
  };

  const addToHistory = (game: GameSummary) => {
    setRecentGames((prev) => {
      const filtered = prev.filter((g) => g.id !== game.id);
      const updated = [game, ...filtered].slice(0, 10);
      return updated;
    });
  };

  return (
    <GameActionsContext.Provider value={{ favorites, recentGames, toggleFavorite, addToHistory }}>
      {children}
    </GameActionsContext.Provider>
  );
};

export const useGameActions = () => {
  const ctx = useContext(GameActionsContext);
  if (!ctx) throw new Error("useGameActions must be used within GameActionsProvider");
  return ctx;
};
