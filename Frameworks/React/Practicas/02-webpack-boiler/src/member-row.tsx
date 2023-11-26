import React from "react";
import { MemberEntity } from "./model";

interface Props {
    member: MemberEntity
}

export const MemberRow = (props: Props) => {
    const { member } = props;
    return (
        <>
            <img src={member.avatar_url} alt={member.login} />
            <div>{member.id}</div>
            <div>{member.login}</div>
        </>
    )
}

