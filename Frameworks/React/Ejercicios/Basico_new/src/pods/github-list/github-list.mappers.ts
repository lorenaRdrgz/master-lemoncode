import { Data } from "@/common/models/data.model";
import * as am from "./api/api-github.model";
import * as vm from "./github-list.vm";

export const mapMemberListToVM = (data: am.Member[]): vm.Member[] =>
  data.map((item) => mapMemberToVM(item));

const mapMemberToVM = (data: am.Member): vm.Member => ({
  id: data.id.toString(),
  login: data.login,
  avatarUrl: data.avatar_url,
});

export const mapMemberListToData = (data: vm.Member[]): Data[] =>
  data.map((item) => mapMemberToData(item));

const mapMemberToData = (data: vm.Member): Data => ({
  id: data.id.toString(),
  name: data.login,
  image: data.avatarUrl,
});



