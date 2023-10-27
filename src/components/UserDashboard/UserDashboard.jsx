import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, createList } from "../../store/user/actions";
import {
  fetchUser,
  createUserList,
  handleAddToList,
  handleRemoveFromList,
} from "../../utils/index";

import { Movies } from "../Movies";
import { MovieList } from "../MovieList";
import { ListPanel } from "../ListPanel";
import { TitleDashboard } from "./UserDashboardStyles";

export const UserDashboard = () => {
  const [selectedList, setSelectedList] = useState(null);
  const [selectedListMovies, setSelectedListMovies] = useState([]);
  const token = localStorage.getItem("authToken");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  // Fetch user data when the component mounts
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/login");
    }

    const getUser = async () => {
      try {
        const userData = await fetchUser(token);
        dispatch(setUser(userData));
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/login");
        } else {
          console.error("Error fetching user:", error);
        }
      }
    };

    getUser();
  }, [token, selectedList]);

  // Function to create a new list and update the user's lists
  const handleCreateList = async (newListName) => {
    try {
      const newList = await createUserList(user.id, newListName);
      dispatch(createList(newList));
      setSelectedList(newList);
    } catch (error) {
      console.log("Error creating a new list error: ", error);
    }
  };

  // Function to handle a change in the selected list that updates the movies to show
  const handleListChange = (listId) => {
    const selectedList = user.lists.find((list) => list.id == listId);

    if (selectedList) {
      const moviesInList = selectedList.movies.map(
        (movie) => movie._movie_movie
      );
      setSelectedList(selectedList);
      setSelectedListMovies(moviesInList);
    } else {
      setSelectedList(null);
      setSelectedListMovies([]);
    }
  };

  // Function to add a movie to the selected list
  const onAddMovie = async (movieId) => {
    if (selectedList) {
      try {
        const response = await handleAddToList(selectedList, movieId);
        //update selectedListMovies
        if (response && response.movies) {
          const newSelectedMovies = response.movies.map(
            (movie) => movie._movie_movie
          );

          setSelectedListMovies(newSelectedMovies);
        }
      } catch (error) {
        console.error("Error adding movie to list:", error);
      }
    }
  };

  //Function to remove a movie from the selected list
  const onRemoveMovie = async (movieId) => {
    if (selectedList) {
      try {
        //update selectedListMovies
        const removedMovieId = movieId;
        const newSelectedMovies = selectedListMovies.filter(
          (movie) => movie.id !== removedMovieId
        );

        setSelectedListMovies(newSelectedMovies);
        // patch request with updated movies
        await handleRemoveFromList(selectedList, newSelectedMovies, movieId);
      } catch (error) {
        console.error("Error removing movie from list:", error);
      }
    }
  };

  return (
    <>
      <TitleDashboard>
        <span>{user.name}'s</span> Dashboard
      </TitleDashboard>
      <Movies
        selectedListMovies={selectedListMovies}
        permission={true}
        onAddMovie={onAddMovie}
        onRemoveMovie={onRemoveMovie}
      />
      <ListPanel
        onCreateList={handleCreateList}
        userLists={user.lists}
        onListChange={handleListChange}
      />
      <MovieList
        movies={selectedListMovies}
        onListChange={handleListChange}
        selectedList={selectedList}
        onRemoveMovie={onRemoveMovie}
      />
    </>
  );
};
