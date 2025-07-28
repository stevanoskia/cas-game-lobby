export interface GameSummary {
  id: string;
  name: string;
}

export interface GameActionsContextType {
  favorites: string[];
  recentGames: GameSummary[];
  toggleFavorite: (gameId: string) => void;
  addToHistory: (game: GameSummary) => void;
}
