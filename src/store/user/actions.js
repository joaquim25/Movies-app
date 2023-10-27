const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SET_USER = "SET_USER";
const CREATE_LIST = "CREATE_LIST";

export const actions = {
  LOGIN,
  LOGOUT,
  SET_USER,
  CREATE_LIST,
};

export const logIn = (authToken) => ({ type: LOGIN, payload: authToken });
export const logOut = () => ({ type: LOGOUT });
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const createList = (list) => ({ type: CREATE_LIST, payload: list });
