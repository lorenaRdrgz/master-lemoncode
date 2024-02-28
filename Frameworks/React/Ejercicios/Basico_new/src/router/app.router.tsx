import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {LoginScene, HomeScene, GitHubListScene, GitHubDetailsScene, RickAndMortyScene, } from "@/scenes"
import { switchRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />} />
        <Route path={switchRoutes.login} element={<LoginScene />} />
        <Route path={switchRoutes.home} element={<HomeScene />} />
        <Route path={switchRoutes.github} element={<GitHubListScene />} />
        <Route path={switchRoutes.rick} element={<RickAndMortyScene />} />        
        <Route path={switchRoutes.githubDetails} element={<GitHubDetailsScene />} />
        {/* <Route path={switchRoutes.rickDetails} element={<ApiRickScene />} /> */}
        <Route path="*" element={<div>404 not found!</div>} />
      </Routes>
    </Router>
  );
};
