export enum GameCategory {
    SLOTS = "slots",
    TABLE = "table",
    LIVE = "live",      
}

export interface Game {
    id: string;
    name: string;
    provider: string;
    image: string;
    category: GameCategory;
    isFavorite: boolean;
}
