import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();
  return (
    <div>
      <h1>Favori Filmler</h1>
      {favorites.length === 0 ? (
        <p>Henüz favori film yok.</p>
      ) : (
        <ul>
          {favorites.map((movie) => (
            <li key={movie.imdbID} className="favorite-item">
              <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
              <button
                onClick={() => removeFavorite(movie.imdbID)}
                style={{
                  marginLeft: "1rem",
                  fontSize: ".85rem",
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                Kaldır
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
