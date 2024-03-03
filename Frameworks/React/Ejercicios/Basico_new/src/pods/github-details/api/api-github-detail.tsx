import { MemberDetailEntityApi } from "./api-github-detail.model";

export const getMember = (id: string): Promise<MemberDetailEntityApi> => {
  return fetch(`https://api.github.com/user/${id}`).then((response) =>
    response.json()
  );
};