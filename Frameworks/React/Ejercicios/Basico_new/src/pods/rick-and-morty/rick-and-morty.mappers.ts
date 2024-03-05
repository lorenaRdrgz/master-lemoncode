import * as am from "./api/rick-and-morty.model";
import * as vm from "./rick-and-morty.vm";

export const mapCharacterListToVM = (data: am.Character[]): vm.CharacterEntity[] =>
  data.map((item) => mapCharacterToVM(item));

const mapCharacterToVM = (data: am.Character): vm.CharacterEntity => ({

  id: data.id.toString(),
  name: data.name,
  status: data.status,
  species: data.species,
  type: data.type,
  gender: data.gender,
  image: data.image,
  url: data.url,
  created: data.created,
});
