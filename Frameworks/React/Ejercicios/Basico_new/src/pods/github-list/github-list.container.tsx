import React from "react";
import { Member } from "./github-list.vm";
import { GitHubListComponent } from "./github-list.component";
import { getMembers } from "./github-list.repository";

interface Props {
  // onSelect: (login: string) => void;
  org:string;
}

export const GitHubListContainer: React.FC<Props> = (props) => {
  // const { onSelect } = props;
  const {org} = props;
  const [members, setMembers] = React.useState<Member[]>([]);

  React.useEffect(() => {
    getMembers(org).then(setMembers);
  }, []);

  return <GitHubListComponent members={members}/>;
};
