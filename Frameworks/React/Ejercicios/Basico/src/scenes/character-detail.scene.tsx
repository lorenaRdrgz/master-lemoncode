import React from "react";
import { AppLayout } from "@/layouts";
import { CharacterDetailContainer } from "@/pods/character-detail";
import { useParams } from "react-router-dom";

export const CharacterDetailScene: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <AppLayout>
      <CharacterDetailContainer name={name} />
    </AppLayout>
  );
};
