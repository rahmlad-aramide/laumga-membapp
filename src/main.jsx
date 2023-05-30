import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Error from "./pages/Error/Error";
import { Dashboard, Details } from "./pages";

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
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/details",
    element: <Details />
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
