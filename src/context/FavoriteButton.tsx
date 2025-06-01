import { useFavorites } from "./FavoritesContext";
import type { Movie } from "../types/Movie";

interface FavoriteButtonProps {
  movie: Movie;
}

const FavoriteButton = ({ movie }: FavoriteButtonProps) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some((f) => f.imdbID === movie.imdbID);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <button onClick={handleClick} style={{ margin: ".5rem 0rem .5rem 0rem" }}>
      {isFavorite ? "❌ Favorilerden Kaldır" : "⭐ Favorilere Ekle"}
    </button>
  );
};

export default FavoriteButton;
