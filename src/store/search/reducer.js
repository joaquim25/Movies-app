import { actions } from "./actions";

const initialState = {
  searchTerm: "",
};

export const searchTermReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};
