import React from "react";
import { Member } from "./github-list.vm";
import { GitHubListComponent } from "./github-list.component";
import { getMembers } from "./github-list.repository";



export const GitHubListContainer: React.FC = () => {
  const [org, setOrg] = React.useState('Lemoncode');
  const [members, setMembers] = React.useState<Member[]>([]);

  React.useEffect(() => {
    getMembers(org).then(setMembers);
  }, []);

  const handleSearch = (org: string) => {
    getMembers(org).then(setMembers);
  }

  return <>
    <GitHubListComponent members={members} onSearch={handleSearch} />
  </>;
};
