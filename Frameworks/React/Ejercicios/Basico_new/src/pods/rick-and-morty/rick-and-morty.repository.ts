import * as api from "./api/api-rick-and-morty";
import { mapCharacterListToVM } from "./rick-and-morty.mappers";
import * as vm from "./rick-and-morty.vm";

export const getCharacters = (name: string): Promise<vm.CharacterEntity[]> => {
  return api.getCharacters(name).then(mapCharacterListToVM);
};