import { Link } from "react-router-dom";
import type { Movie } from "../types/Movie";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <div>
      <Link to={`/movie/${movie.imdbID}`}>
        <h4>{movie.Title}</h4>
        <p>{movie.Year}</p>
      </Link>
    </div>
  );
};

export default MovieItem;
