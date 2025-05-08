import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";

import Body from "./components/Body";
import About from "./components/About";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="app">
      <Header setSearchText={setSearchText} />
      <Body searchText={searchText} />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
