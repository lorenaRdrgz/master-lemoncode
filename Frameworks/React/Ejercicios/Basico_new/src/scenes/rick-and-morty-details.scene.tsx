import React from "react";
import { useParams } from "react-router-dom"
import { AppLayout } from "@/layouts/app.layout";
import { CenteredLayout } from "layouts/centered.layout";
import { RickAndMortyDetailsContainer } from "@/pods/rick-and-morty-details/rick-and-morty-details.container";


export const RickAndMortyDetailsScene: React.FC = () => {
  const { id } = useParams();
  return (
    <AppLayout>
      <CenteredLayout>
        <RickAndMortyDetailsContainer id={id} />
      </CenteredLayout>
    </AppLayout>
  );
};
