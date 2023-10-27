import React from "react";
import { MovieCard } from "./MovieCard";
import { MoviesGrid } from "./MoviesStyles";
import { MovieListContainer } from "./MovieListStyles";

export const MovieList = ({ movies, onListChange, onRemoveMovie }) => {
  return (
    <MovieListContainer>
      <MoviesGrid>
        {movies ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              title={movie.title}
              year={movie.year}
              img={movie.img}
              onListChange={onListChange}
              removeButton={true}
              onRemoveMovie={onRemoveMovie}
            />
          ))
        ) : (
          <p>No movies to display...</p>
        )}
      </MoviesGrid>
    </MovieListContainer>
  );
};
