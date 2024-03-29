import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MemberListScene, MemberDetailScene, CharacterListScene, CharacterDetailScene, LoginScene } from "@/scenes";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />} />
        <Route path={switchRoutes.list} element={<MemberListScene />} />
        <Route path={switchRoutes.detail} element={<MemberDetailScene />} />
        <Route path={switchRoutes.listCharacter} element={<CharacterListScene />} />
        <Route path={switchRoutes.detailCharacter} element={<CharacterDetailScene />} />
        <Route path="*" element={<div>404 not found!</div>} />
      </Routes>
    </HashRouter>
  );
};
