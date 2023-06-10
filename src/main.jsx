import React from "react";
import ReactDOM from "react-dom/client";
import { Home, News } from "./pages";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Error from "./pages/Error/Error";
import Search from "./pages/search/search";
import { Dashboard, Details, Signup } from "./pages";


// eslint-disable-next-line react-refresh/only-export-components
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
    element: <AuthenticatedRoute component={Details} />,
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
    path: "/members",
    element: <AuthenticatedRoute component={Search} />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
