import React from "react";
import { CenteredLayout } from "layouts/centered.layout";
import { RickAndMortyContainer } from "@/pods/rick-and-morty/rick-and-morty.container";
import { AppLayout } from "@/layouts/app.layout";

export const RickAndMortyScene: React.FC = () => {
  return (
    <AppLayout>
      <CenteredLayout>
        <RickAndMortyContainer />
      </CenteredLayout>
    </AppLayout>
  );
};
