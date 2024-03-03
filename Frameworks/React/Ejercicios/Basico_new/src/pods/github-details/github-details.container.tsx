import React from "react";
import { createDefaultMemberDetail } from "./github-details.vm";
import { GitHubDetailsComponent } from "./github-details.component";
import { getMember } from "./api/api-github-detail";

interface Props {
    id: string;
}

export const GitHubDetailsContainer: React.FC<Props> = (props) => {
    const { id } = props;
    const [member, setMember] = React.useState(createDefaultMemberDetail());

    React.useEffect(() => {
        getMember(id).then(setMember);
    }, []);

    return <GitHubDetailsComponent member={member} />
}