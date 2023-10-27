import { actions } from "./actions";

const authToken = localStorage.getItem("authToken");
const initialState = {
  id: null,
  name: "...",
  lists: [],
  isLoggedIn: authToken ? true : false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      localStorage.setItem("authToken", action.payload);
      return {
        ...state,
        isLoggedIn: true,
      };
    case actions.LOGOUT:
      localStorage.removeItem("authToken");
      return {
        ...state,
        isLoggedIn: false,
      };
    case actions.SET_USER:
      return {
        id: action.payload.id,
        name: action.payload.name,
        lists: action.payload.user_lists,
        isLoggedIn: true,
      };
    case actions.CREATE_LIST:
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    default:
      return state;
  }
};
