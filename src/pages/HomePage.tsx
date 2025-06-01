import { useForm } from "react-hook-form";
import { useState } from "react";
import { searchMovies } from "../api/omdb";
import type { Movie } from "../types/Movie";
import MovieItem from "../context/MovieItem";

type FormData = { query: string };

export default function HomePage() {
  const { register, handleSubmit } = useForm<FormData>();
  const [results, setResults] = useState<Movie[]>([]);

  const onSubmit = async (data: FormData) => {
    if (data.query == "") throw "Boş bırakılamaz!";
    const movies = await searchMovies(data.query);
    setResults(movies);
  };

  return (
    <div className="search-panel">
      <div className="search-header">
        <h1>Film Ara</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="search-form">
          <input
            {...register("query")}
            placeholder="Film adı"
            className="search-input"
          />
          <button type="submit" className="search-button">
            Ara
          </button>
        </form>
      </div>
      <ul>
        {results.map((movie) => (
          <li key={movie.imdbID} className="movie-content">
            <MovieItem movie={movie}></MovieItem>
          </li>
        ))}
      </ul>
    </div>
  );
}
