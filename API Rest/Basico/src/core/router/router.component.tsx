import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.characterCollection} element={<CharacterCollectionScene />}/>
        {/* <Route path={switchRoutes.createHotel} element={<HotelScene />} />
        <Route path={switchRoutes.editHotel} element={<HotelScene />} /> */}
        <Route path={switchRoutes.root} element={<Navigate to={switchRoutes.characterCollection} />}/>
      </Routes>
    </HashRouter>
  );
};
