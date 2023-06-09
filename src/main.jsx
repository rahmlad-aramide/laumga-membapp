import React from "react";
import ReactDOM from "react-dom/client";
import { Home, News } from "./pages";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
// import Register from "./pages/register";
// import Register from './pages/Signup';
import Error from "./pages/Error/Error";
import { Dashboard, Details, Signup } from "./pages";
import Search from "./pages/search/search";


const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const userId = localStorage.getItem('userId');

  if (!userId) {
    // Redirect the user to the login page
    window.location.href = '/login';
    return null;
  }

  return <Component {...rest}/>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />
  },
  // {
  //   path: "/register",
  //   element: <Register />
  // },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/dashboard",
    element: <AuthenticatedRoute component={Dashboard} />,
  },
  {
    path: "/dashboard/details",
    element: <Details />
  },
  {
    path: "/news",
    element: <News />
  },
  {
    path: "/*",
    element: <Error />
  },
  {
    path: "/search",
    element: <Search />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
