import crypto from 'crypto';
import { createDefaultCharacter, mockCharacters } from './mock-data';
import {Character, CharacterEdit} from './models';

let characters = [...mockCharacters];

export const getCharactersList = async (page, name): Promise<Character[]> => characters;

export const getCharacter = async (id: string): Promise<Character> =>
  characters.find((c) => c.id === parseInt(id)) as Character;

export const insertCharacter = async (characterEdit: CharacterEdit) => {
  const newId = characters.length + 1;
  characters = [
    ...characters,
    {
      ...createDefaultCharacter(),
      ...characterEdit,
      id: newId,
    },
  ];
  return newId;
};

export const updateCharacter = async (characterEdit: CharacterEdit): Promise<boolean> => {
  characters = characters.map((c) =>
    c.id === characterEdit.id
      ? {
          ...c,
          ...characterEdit,
        }
      : c
  );

  return true;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characters = characters.filter((c) => c.id !== parseInt(id));
  return true;
};