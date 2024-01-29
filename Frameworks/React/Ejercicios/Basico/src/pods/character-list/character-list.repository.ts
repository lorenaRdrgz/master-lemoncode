import * as api from "./api/api";
import { mapCharcterListToVM } from "./character-list.mappers";
import * as vm from "./character-list.vm";

export const getCharacters = (): Promise<vm.Character[]> => {
  return api.getCharacter().then(mapCharcterListToVM);
};

export const getCharactersLogin = (): Promise<string[]> => {
    return api.getCharacter().then((characters) => characters.map((character) => character.name));
}