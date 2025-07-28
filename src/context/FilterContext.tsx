'use client';

import React, { createContext, useContext, useState } from "react";
import { GameCategory } from "@/types/Game";
import { GameFilterContextType } from "@/types/GameFilterContextType";

const GameFilterContext = createContext<GameFilterContextType | undefined>(undefined);

export const useGameFilter = () => {
  const context = useContext(GameFilterContext);
  if (!context) {
    throw new Error("useGameFilter must be used within a GameFilterProvider");
  }
  return context;
};

export const GameFilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<GameCategory | null>(null);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory(null);
  };

  return (
    <GameFilterContext.Provider
      value={{ search, setSearch, selectedCategory, setSelectedCategory, clearFilters }}
    >
      {children}
    </GameFilterContext.Provider>
  );
};
