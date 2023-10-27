import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import {
  MoviesContainer,
  MoviesGrid,
  PageButtons,
  PageInfo,
} from "./MoviesStyles";
import { fetchMovies } from "../utils";
import { useSelector } from "react-redux";
import { GrNext, GrPrevious } from "react-icons/gr";

export const Movies = ({
  permission = false,
  onAddMovie,
  onRemoveMovie,
  selectedListMovies,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState({
    currPage: 1,
    nextPage: null,
    prevPage: null,
    pageTotal: null,
  });
  const searchTerm = useSelector((state) => state.search.searchTerm);

  // Fetch movies based on the search parameter, if given,
  // triggers at start, refresh and at search value change
  useEffect(() => {
    const getMovies = async () => {
      try {
        const page = pages.currPage;
        const moviesData = await fetchMovies(searchTerm, page);
        setPages({
          ...pages,
          nextPage: moviesData.nextPage,
          prevPage: moviesData.prevPage,
          pageTotal: moviesData.pageTotal,
        });
        setMovies(moviesData.items);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getMovies();
  }, [searchTerm, pages.currPage]);

  const onChangePage = (action) => {
    switch (action) {
      case "increment":
        setPages({ ...pages, currPage: pages.currPage + 1 });
        break;
      case "decrement":
        setPages({ ...pages, currPage: pages.currPage - 1 });
        break;
      default:
        return;
    }
  };

  // Helper function to render a MovieCard component for each movie on a list
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
      <PageButtons>
        {pages.prevPage && (
          <button className='prevBtn' onClick={() => onChangePage("decrement")}>
            <GrPrevious />
          </button>
        )}

        {pages.nextPage && (
          <button className='nextBtn' onClick={() => onChangePage("increment")}>
            <GrNext />
          </button>
        )}
      </PageButtons>
      <PageInfo>
        Page {pages.currPage} / {pages.pageTotal}
      </PageInfo>
    </MoviesContainer>
  );
};
