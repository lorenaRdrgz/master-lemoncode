import * as am from "./api/api-github-detail.model";
import * as vm from "./github-details.vm";

export const mapMemberToVM = (data: am.MemberDetailEntityApi): vm.MemberDetailEntity => ({
  login: data.login,
  id: data.id,
  name: data.name,
  company: data.company,
  bio: data.bio,
  avatar_url: data.avatar_url
});
