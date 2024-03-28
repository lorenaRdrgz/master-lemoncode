import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection("1", "");
  }, []);

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    loadCharacterCollection("1", "");
  };

  const hadleSearch = async (page:string,name:string) =>{
    loadCharacterCollection(page,name);
  }

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onSearch={hadleSearch}
    />
  );
};
