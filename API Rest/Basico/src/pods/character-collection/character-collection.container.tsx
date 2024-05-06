import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { CharacterEntityVm } from './character-collection.vm';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const [filteredCharacterCollection, setFilteredCharacterCollection] = React.useState<CharacterEntityVm[]>([]);
  const [page, setPage] = React.useState(1);
  const navigate = useNavigate();

  const onLoadCharacterCollection = async () => {
    try {
      await loadCharacterCollection();
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    onLoadCharacterCollection();
  }, []);

  React.useEffect(() => {
    setFilteredCharacterCollection(characterCollection);
  }, [characterCollection]);

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    loadCharacterCollection();
    setFilteredCharacterCollection(characterCollection);
  };

  const filterCharacterCollection = (name: string) => {
    if (!name) {
      setFilteredCharacterCollection(
        characterCollection.slice((page - 1) * 5, page * 5)
      );
      return;
    }
    setFilteredCharacterCollection(
      characterCollection.filter((character) =>
        character.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  const onPageChange = (page: number) => {
    setPage(page);
    setFilteredCharacterCollection(
      characterCollection.slice((page - 1) * 5, page * 5)
    );
  };

  return (
    <CharacterCollectionComponent
      filteredCharacterCollection={filteredCharacterCollection}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onPaginate={onPageChange}
      onFilter={filterCharacterCollection}
    />
  );
};
