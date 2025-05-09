import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";

import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contect";
import Error from "./components/Error";
import RestaurantManu from "./components/RestaurantManu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const AppLayout = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="app">
      <Header setSearchText={setSearchText} />
      <Outlet context={{searchText}}/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantManu />,
      }
    ],
    errorElement: <Error />
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
