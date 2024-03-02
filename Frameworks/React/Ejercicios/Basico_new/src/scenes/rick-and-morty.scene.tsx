import React from "react";
import { CenteredLayout } from "layouts/centered.layout";
import { RickAndMortyComponent } from "@/pods/rick-and-morty/rick-and-morty.component";
import { RickAndMortyContainer } from "@/pods/rick-and-morty/rick-and-morty.container";

export const RickAndMortyScene: React.FC = () => {
  return (
    <CenteredLayout>
      <RickAndMortyContainer />
    </CenteredLayout>
  );
};
