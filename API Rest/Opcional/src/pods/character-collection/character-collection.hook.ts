import * as React from 'react';
import { mapCharacterCollectionFromApiToVm  } from './character-collection.mapper';
import { getCharacterCollection } from './api/character-collection.api';
import { CharacterEntityVm } from './character-collection.vm';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = async (page, name) => {
    const result = await getCharacterCollection(page, name);
    setCharacterCollection(mapCharacterCollectionFromApiToVm(result));
  };

  return { characterCollection, loadCharacterCollection };
};


