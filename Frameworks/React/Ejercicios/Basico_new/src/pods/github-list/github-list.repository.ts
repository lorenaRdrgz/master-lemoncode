import * as api from "./api/api-github";
import { mapMemberListToVM } from "./github-list.mappers";
import * as vm from "./github-list.vm";

export const getMembers = (org: string): Promise<vm.Member[]> => {
  return api.getMembers(org).then(mapMemberListToVM);
};

export const getMembersLogin = (org: string): Promise<string[]> => {
    return api.getMembers(org).then((members) => members.map((member) => member.login));
}
