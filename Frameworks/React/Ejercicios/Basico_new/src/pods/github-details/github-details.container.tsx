import React from "react";
import { createDefaultMemberDetail } from "./github-details.vm";
import { GitHubDetailsComponent } from "./github-details.component";

interface Props {
    id:string;
}

export const GitHubDetailsContainer: React.FC<Props> = (props) => {
    const {id} = props;
    const [member, setMember] = React.useState(createDefaultMemberDetail());

    React.useEffect(() => {
        fetch(`https://api.github.com/user/${id}`)
            .then(response => response.json()
                .then(json => setMember(json)))
    }, []);

    return <GitHubDetailsComponent member={member}/>
}