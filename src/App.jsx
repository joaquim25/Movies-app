import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from "./components/Auth/LoginPage.jsx";
import { Homepage } from "./components/Homepage/Homepage.jsx";
import { RegisterPage } from "./components/Auth/RegisterPage.jsx";
import { UserDashboard } from "./components/UserDashboard/UserDashboard.jsx";
import { MoviePage } from "./components/MoviePage/MoviePage.jsx";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "/", Component: Homepage },
      { path: "/login", Component: LoginPage },
      { path: "/register", Component: RegisterPage },
      { path: "/user-dashboard", Component: UserDashboard },
      { path: "/movies/:movieId", Component: MoviePage },
    ],
  },
]);

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
