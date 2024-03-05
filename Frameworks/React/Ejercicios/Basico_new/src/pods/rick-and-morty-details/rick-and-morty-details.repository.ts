import * as api from "./api/api-rick-and-morty-detail";
import { mapCharacterToVM } from "./rick-and-morty-details.mappers";
import * as vm from "./rick-and-morty-details.vm";

export const getCharacter = (id: string): Promise<vm.CharacterDetailEntity> => {
  return api.getCharacter(id).then(mapCharacterToVM);
};