import React from "react";
import { Route, Routes } from "react-router-dom";

import Posts from "./pages/Posts";

import { routes } from "./router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
      <Route path="*" element={<Posts />} />
    </Routes>
  );
};

export default AppRouter;
