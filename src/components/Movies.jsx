import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { MoviesContainer, MoviesGrid } from "./MoviesStyles";
import { fetchMovies } from "../utils";
import { useSelector } from "react-redux";

export const Movies = ({
  permission = false,
  onAddMovie,
  onRemoveMovie,
  selectedListMovies,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const searchTerm = useSelector((state) => state.search.searchTerm);

  // Fetch movies based on the search parameter, if given,
  // triggers at start and at search value change
  useEffect(() => {
    const getMovies = async () => {
      try {
        const moviesData = await fetchMovies(searchTerm);
        setMovies(moviesData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getMovies();
  }, [searchTerm]);

  // Helper function to render a MovieCard component for each movie
  const renderMovieCard = (movie) => {
    const moviesInList = selectedListMovies
      ? selectedListMovies.map((movie) => {
          return movie.id;
        })
      : null;

    return (
      <MovieCard
        key={movie.id}
        movie={movie}
        title={movie.title}
        year={movie.year}
        img={movie.img}
        addButton={permission}
        onAddMovie={onAddMovie}
        onRemoveMovie={onRemoveMovie}
        moviesInList={moviesInList}
      />
    );
  };

  return (
    <MoviesContainer>
      <h1>Featured Movies</h1>
      <MoviesGrid>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {movies && movies.map(renderMovieCard)}
      </MoviesGrid>
    </MoviesContainer>
  );
};
