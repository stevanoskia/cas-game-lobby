import { useGameFilter } from "@/context/FilterContext";
import { useGameActions } from "@/context/FavouritesContext"; 
import { GameCategory } from "@/types/Game";

const Filter = () => {
  const {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    clearFilters,
    showFavoritesOnly,
    toggleShowFavorites,
  } = useGameFilter();

  const { favorites } = useGameActions(); // ⬅️ Access favorites from context

  return (
    <div className="space-y-4 mb-6">
      {/* Search */}
      <input
        type="text"
        placeholder="Search games..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-lg px-4 py-2 rounded-md bg-zinc-800 text-white placeholder-zinc-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-1 rounded-full border ${
            selectedCategory === null
              ? "bg-yellow-400 text-black"
              : "bg-zinc-800 text-white border-zinc-600"
          } hover:bg-yellow-300 transition`}
        >
          All
        </button>

        {Object.values(GameCategory).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full border ${
              selectedCategory === cat
                ? "bg-yellow-400 text-black"
                : "bg-zinc-800 text-white border-zinc-600"
            } hover:bg-yellow-300 transition`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}

        {/* Favorites Toggle Button (Only Show if We Have Any Favorites) */}
        {favorites.length > 0 && (
          <button
            onClick={toggleShowFavorites}
            className={`px-4 py-1 rounded-full border ${
              showFavoritesOnly
                ? "bg-pink-500 text-white"
                : "bg-zinc-800 text-white border-zinc-600"
            } hover:bg-pink-400 transition`}
          >
            {showFavoritesOnly ? "Showing Favorites" : "Show Favorites"}
          </button>
        )}

        <button
          onClick={clearFilters}
          className="ml-auto px-4 py-1 rounded-full bg-red-500 text-white hover:bg-red-400 transition"
        >
          Clear filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
