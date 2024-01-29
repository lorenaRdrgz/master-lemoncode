import * as api from "./api/api";
import { mapMemberListToVM } from "./member-list.mappers";
import * as vm from "./member-list.vm";

export const getMembers = (org: string): Promise<vm.Member[]> => {
  return api.getMembers(org).then(mapMemberListToVM);
};

export const getMembersLogin = (org: string): Promise<string[]> => {
    return api.getMembers(org).then((members) => members.map((member) => member.login));
}


export const getCharactersLogin = (character:string): Promise<string[]> => {
    return api.getCharacter(character).then((characters) => characters.map((character) => character.name));
}