import * as am from "./api/api.model";
import * as vm from "./character-list.vm";

export const mapCharcterListToVM = (data: am.Character[]): vm.Character[] =>
  data.map((item) => mapCharacterToVM(item));

const mapCharacterToVM = (data: am.Character): vm.Character => ({
  id: data.id,
  name: data.name,
  image: data.image,
});
