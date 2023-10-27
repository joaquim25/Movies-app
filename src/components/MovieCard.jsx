import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MovieCardContainer } from "./MovieCardStyles";

export const MovieCard = ({
  movie,
  title,
  year,
  img,
  addButton,
  removeButton,
  onAddMovie,
  onRemoveMovie,
  moviesInList,
}) => {
  // Track if the movie is in the user's list
  const isMovieInList = moviesInList ? moviesInList.includes(movie.id) : null;

  const toggleMovieInList = () => {
    if (isMovieInList) {
      onRemoveMovie(movie.id);
    } else {
      onAddMovie(movie.id);
    }
  };

  const removeMovieFromList = () => {
    onRemoveMovie(movie.id);
  };

  // Determine the icon to display based on whether the movie is in the list
  const icon = isMovieInList ? (
    <AiFillMinusCircle onClick={toggleMovieInList} />
  ) : (
    addButton && <BsPlusCircleFill onClick={toggleMovieInList} />
  );

  return (
    <MovieCardContainer>
      {addButton && icon}
      {removeButton && <AiFillMinusCircle onClick={removeMovieFromList} />}
      <Link to={`/movies/${movie.id}`}>
        <img src={img} alt={title} />
      </Link>
      <p>{title}</p>
      <p>{year}</p>
    </MovieCardContainer>
  );
};
