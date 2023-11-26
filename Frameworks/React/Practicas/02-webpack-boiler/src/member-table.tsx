import React from "react";
import { MemberEntity } from "./model";
import { MemberRow } from "./member-row";
import { MemberHeader } from "./member-header";

export const MemberTable: React.FC = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);

    React.useEffect(() => {
        fetch("https://api.github.com/orgs/lemoncode/members")
            .then((response) => response.json())
            .then((results) => setMembers(results));
    }, []);

    return (
        <>
            <div className="user-list-container">
                <MemberHeader />
                {members.map((member) => (
                    <MemberRow key={member.id} member={member} />
                ))}
            </div>
        </>
    );
}
