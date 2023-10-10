import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Phones from "./components/Phones";
import Phone from "./components/Phone";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Phones></Phones>,
        loader: () => fetch("http://localhost:5000/phones/"),
      },
      {
        path: "/phones/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/phones/${params.id}`),
        element: <Phone></Phone>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
