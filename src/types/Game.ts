export interface Game {
    id: string;
    name: string;
    provider: string;
    image: string;
    category: "slots" | "table" | "live";
}
