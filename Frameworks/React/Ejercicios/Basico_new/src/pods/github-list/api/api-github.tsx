import { Member } from "./api-github.model";

export const getMembers = (org: string): Promise<Member[]> => {
  return fetch(`https://api.github.com/orgs/${org}/members`).then((response) =>
    response.json()
  );
};