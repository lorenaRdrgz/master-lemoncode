import * as React from 'react';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';
import { getCharacterCollection } from './api/character-collection.api';
import { CharacterEntityVm } from './character-collection.vm';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = (page, name) => {
    getCharacterCollection(page, name).then((result) =>
      setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    );
  };

  return { characterCollection, loadCharacterCollection };
};


