import * as am from "./api/api-github.model";
import * as vm from "./github-list.vm";

export const mapMemberListToVM = (data: am.Member[]): vm.Member[] =>
  data.map((item) => mapMemberToVM(item));

const mapMemberToVM = (data: am.Member): vm.Member => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url,
});
