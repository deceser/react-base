import React from "react";

import AppRouter from "./AppRouter";
import NavbarUi from "./components/UI/NavbarUi";

import "./index.scss";

const App = () => {
  return (
    <div>
      <NavbarUi />
      <AppRouter />
    </div>
  );
};

export default App;
