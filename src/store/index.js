import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/reducer";
import { searchTermReducer } from "./search/reducer";

export default configureStore({
  reducer: {
    user: userReducer,
    search: searchTermReducer,
  },
});
