import * as React from 'react';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';
import { getCharacterCollection } from './api/character-collection.api';
import { CharacterEntityVm } from './character-collection.vm';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = async () => {
    const result = await getCharacterCollection();
    console.log('result:')
    console.log(result)
    console.log('mapToCollection(result, mapFromApiToVm)')
    console.log(mapToCollection(result, mapFromApiToVm))
    setCharacterCollection(mapToCollection(result, mapFromApiToVm));
    console.log('characterCollection hook:')
    console.log(characterCollection)
  };

  return { characterCollection, loadCharacterCollection };
};


