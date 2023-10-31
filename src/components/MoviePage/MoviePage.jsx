import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../utils";
import { MovieCard } from "../MovieCard";
import {
  Detailinfo,
  DirectorDetails,
  DirectorDetailsText,
  DirectorImg,
  DirectorInfo,
  MovieIconDetails,
  MovieImg,
  MovieInfo,
  MoviePageContainer,
  MoviePageSubtitle,
  MoviePageTitle,
  OtherMovies,
} from "./MoviePageStyles";
import { MoviesGrid } from "../MoviesStyles";
import { FcClock, FcRating } from "react-icons/fc";

export const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieData = await getMovieById(movieId);
        setMovie(movieData);
        console.log(movieData)
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, [movieId]);

  const renderMovieCard = (movie) => (
    <MovieCard
      permission={false}
      key={movie.id}
      movie={movie}
      title={movie.title}
      year={movie.year}
      img={movie.img}
    />
  );

  return (
    <>
      {movie ? (
        <MoviePageContainer>
          <MoviePageTitle>{movie.title}</MoviePageTitle>
          <MoviePageSubtitle>
            {movie.year} - {movie.genre}
          </MoviePageSubtitle>

          <MovieInfo>
            <MovieImg src={movie.img} alt={movie.title} />
            <h2>About</h2>
            <p>{movie.about}</p>
            <MovieIconDetails>
              <Detailinfo>
                <FcClock /> {movie.runtime}
              </Detailinfo>
              <Detailinfo>
                <FcRating /> {movie.IMDb_rating} Stars on IMDb
              </Detailinfo>
            </MovieIconDetails>
          </MovieInfo>

          <DirectorInfo>
            <h2>Director: {movie._movie_director.name}</h2>
            <DirectorDetails>
              <DirectorImg
                src={movie._movie_director.img}
                alt={movie._movie_director.name}
              />
              <DirectorDetailsText>
                <span>Place of Birth:</span>
                {movie._movie_director.place_of_birth}
              </DirectorDetailsText>
              <DirectorDetailsText>
                <span>Date of Birth:</span>
                {movie._movie_director.date_of_birth}
              </DirectorDetailsText>
            </DirectorDetails>
            <p>{movie._movie_director.bio}</p>
          </DirectorInfo>

          <OtherMovies>
            <h2>Other Movies by {movie._movie_director.name}</h2>
            {movie._movie_director._director_movies.length > 1 ? (
              <MoviesGrid>
                {movie._movie_director._director_movies
                  .filter((directorMovie) => directorMovie.id !== movie.id)
                  .map(renderMovieCard)}
              </MoviesGrid>
            ) : (
              <p>
                Sorry, we have no more movies by {movie._movie_director.name}
              </p>
            )}
          </OtherMovies>
        </MoviePageContainer>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};
