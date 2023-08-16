import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";
import Saved from "../pages/saved/Saved";
import Series from "../pages/series/Series";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/movies",
        element: <Movies></Movies>,
      },
      {
        path: "/series",
        element: <Series></Series>,
      },
      {
        path: "/saved",
        element: <Saved></Saved>,
      },
    ],
  },
  // {
  //   path: "/register",
  //   element: <Register></Register>,
  // },

  {
    path: "/404",
    element: (
      <h2 className="font-black py-6 text-3xl text-red-600 text-center">
        Page Not Found!
      </h2>
    ),
  },

  {
    path: "*",
    element: (
      <h2 className="font-black py-6 text-3xl text-red-600 text-center">
        Page Not Found!
      </h2>
    ),
  },
]);
