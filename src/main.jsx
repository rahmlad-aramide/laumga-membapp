import React from "react";
import ReactDOM from "react-dom/client";
import { Home, News } from "./pages";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Error from "./pages/Error/Error";
import { Dashboard, Details, Signup } from "./pages";

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
    path: "/register",
    element: <Register />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
