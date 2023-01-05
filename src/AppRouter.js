import React from "react";
import { Route, Routes } from "react-router-dom";

import Posts from "./pages/Posts";
import About from "./pages/About";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Posts />} />
    </Routes>
  );
};

export default AppRouter;
