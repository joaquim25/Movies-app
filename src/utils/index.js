import axios from "axios";
import { useDispatch } from "react-redux";
import { actions } from "../store/user/actions";
const API_BASE_URL = "https://x8ki-letl-twmt.n7.xano.io/api:Ughk0d_6";

//Check for token in a set interval
export const checkAuthTokenPeriodically = () => {
  setInterval(() => {
    const authToken = localStorage.getItem("authToken");
    console.log("checking token validity");
    if (!authToken) {
      // Dispatch a logout action
      const dispatch = useDispatch();
      dispatch({ type: actions.LOGOUT });
    }
  }, 300000); // Check every 5 minutes
};

// API RELATED:

//USER API ------------------------------------------------------------------
// Function to fetch user information
export const fetchUser = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// MOVIES API--------------------------------------
// Function to fetch movies based on a search parameter if given, otherwise return all
export const fetchMovies = async (searchParam) => {
  try {
    const response = await axios.get(
      "https://x8ki-letl-twmt.n7.xano.io/api:Ughk0d_6/movie_movie_filter",
      {
        params: {
          searchTerm: searchParam,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Function to fetch a movie by its ID
export const getMovieById = async (movieId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie_movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//LIST API --------------------------------------------------------------------
// Function to create a user's movie list
export const createUserList = async (userId, listName) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/movie_list`, {
      movie_user_id: userId,
      name: listName,
      movies: null,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Function to fetch movies from a specific list
export const fetchListMovies = async (listId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie_list/${listId}`);
    return response.data.movies.movie_movie_id;
  } catch (error) {
    console.log(error);
  }
};

// Function to fetch a movie-list record
export const fetchList = async (listId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie_list/${listId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Function to add movies to a specific list
export const handleAddToList = async (selectedList, movieId) => {
  try {
    const updatedList = { ...selectedList }; // Create a copy of the selectedList

    const moviesIdsInList = updatedList.movies.map(
      (movie) => movie.movie_movie_id
    );

    // Check if the movieId is already in the list, and if not, add it
    if (!moviesIdsInList.includes(movieId)) {
      updatedList.movies.push({ id: movieId });
    }

    // Prepare the data to be sent in the PATCH request
    const requestData = {
      movie_list_id: updatedList.id,
      name: updatedList.name,
      movie_user_id: updatedList.movie_user_id,
      movies: updatedList.movies,
    };

    // Send a PATCH request to update the list
    const response = await axios.patch(
      `${API_BASE_URL}/movie_list/${selectedList.id}`,
      requestData
    );

    return response.data;
  } catch (error) {
    console.log("AddMovieToList error", error);
  }
};

export const handleRemoveFromList = async (selectedList, newSelectedMovies) => {
  try {
    // Prepare the data to be sent in the PATCH request
    const requestData = {
      movie_list_id: selectedList.id,
      name: selectedList.name,
      movie_user_id: selectedList.movie_user_id,
      movies: newSelectedMovies,
    };

    // Send a PATCH request to update the list
    const response = await axios.patch(
      `${API_BASE_URL}/movie_list/${selectedList.id}`,
      requestData
    );

    return response.data;
  } catch (error) {
    console.log("RemoveFromList error", error);
  }
};
