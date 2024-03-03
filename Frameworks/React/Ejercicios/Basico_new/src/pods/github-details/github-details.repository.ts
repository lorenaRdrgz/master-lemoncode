import * as api from "./api/api-github-detail";
import { mapMemberToVM } from "./github-details.mappers";
import * as vm from "./github-details.vm";

export const getMember = (org: string): Promise<vm.MemberDetailEntity> => {
  return api.getMember(org).then(mapMemberToVM);
};