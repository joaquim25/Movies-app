import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { logOut } from "./store/user/actions";
import { useDispatch } from "react-redux";
import { checkAuthTokenPeriodically } from "./utils";

const Layout = () => {
  const authToken = localStorage.getItem("authToken");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // Checks for the token every 5min, redirecting to Login page when the token does not exist
  checkAuthTokenPeriodically();

  let headerProps = {
    links: [],
    hideSearchBar: false,
  };

  const defineHeaderProps = (location, headerProps) => {
    switch (location.pathname) {
      case "/":
        return authToken
          ? {
              links: [
                { to: "/user-dashboard", text: "Dashboard" },
                {
                  text: "Logout",
                  action: () => {
                    dispatch(logOut());
                    navigate("/login");
                  },
                },
              ],
            }
          : {
              links: [
                { to: "/register", text: "Register" },
                { to: "/login", text: "Login" },
              ],
            };
      case "/user-dashboard":
        return {
          links: [
            { to: "/", text: "Home" },
            {
              text: "Logout",
              action: () => {
                dispatch(logOut());
                navigate("/login");
              },
            },
          ],
        };
      case "/login":
        return {
          links: [
            { to: "/", text: "Home" },
            { to: "/register", text: "Register" },
          ],
          hideSearchBar: true,
        };
      case "/register":
        return {
          links: [
            { to: "/", text: "Home" },
            { to: "/login", text: "Login" },
          ],
          hideSearchBar: true,
        };
      default:
        if (location.pathname.startsWith("/movies/")) {
          return {
            links: [
              { to: "/", text: "Home" },
              {
                text: "Logout",
                action: () => {
                  dispatch(logOut());
                  navigate("/login");
                },
              },
            ],
            hideSearchBar: true,
          };
        }
        return headerProps;
    }
  };
  const { links, hideSearchBar } = defineHeaderProps(location, headerProps);

  return (
    <>
      <Header hideSearchBar={hideSearchBar} links={links} />
      <Outlet />
    </>
  );
};

export default Layout;
