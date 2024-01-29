import { Character, Member } from "./api.model";

export const getMembers = (org: string): Promise<Member[]> => {
  return fetch(`https://api.github.com/orgs/${org}/members`).then((response) =>
    response.json()
  );
};

export const getCharacter = (): Promise<Character[]> => {
  return fetch(`https://rickandmortyapi.com/api/character/`).then((response) =>
    response.json()
  );
};
