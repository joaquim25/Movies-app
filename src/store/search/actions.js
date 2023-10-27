const UPDATE_SEARCH_TERM = "CHANGE_SEARCH_TERM";

export const actions = {
  UPDATE_SEARCH_TERM,
};

export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: searchTerm,
});
