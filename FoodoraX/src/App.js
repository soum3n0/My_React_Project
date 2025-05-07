import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";

import Body from "./components/Body";
import { useState } from "react";

const AppLayout = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="app">
      <Header setSearchText={setSearchText} />
      <Body searchText={searchText} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
