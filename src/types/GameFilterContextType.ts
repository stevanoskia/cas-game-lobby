import { GameCategory } from "@/types/Game";

export interface GameFilterContextType {
  search: string;
  setSearch: (value: string) => void;
  selectedCategory: GameCategory | null;
  setSelectedCategory: (value: GameCategory | null) => void;
  clearFilters: () => void;
  showFavoritesOnly: boolean;
  toggleShowFavorites: () => void;
}