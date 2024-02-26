import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScene } from "scenes/home.scene";
import { LoginScene } from "scenes/login.scene";
import { switchRoutes } from "./routes";
import { ApiGitHubScene } from "@/scenes/api-github.scene";
import { ApiRickScene } from "@/scenes/api-rick.scene";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />} />
        <Route path={switchRoutes.login} element={<LoginScene />} />
        <Route path={switchRoutes.home} element={<HomeScene />} />
        <Route path={switchRoutes.github} element={<ApiGitHubScene />} />
        <Route path={switchRoutes.rick} element={<ApiRickScene />} />
        <Route path="*" element={<div>404 not found!</div>} />
      </Routes>
    </Router>
  );
};
