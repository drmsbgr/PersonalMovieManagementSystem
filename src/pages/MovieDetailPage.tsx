import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/omdb";
import type { Movie } from "../types/Movie";
import FavoriteButton from "../context/FavoriteButton";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (id) getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <p>Yükleniyor...</p>;

  return (
    <div className="movie-detail-card">
      <h1>
        {movie.Title} ({movie.Year})
      </h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p>
        <strong>Yönetmen:</strong> {movie.Director}
      </p>
      <p>
        <strong>Tür:</strong> {movie.Genre}
      </p>
      <FavoriteButton movie={movie} />
    </div>
  );
}
