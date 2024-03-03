export interface MemberDetailEntity {
    id: number;
    name: string;
    company: string;
    bio: string;
    login: string;
    avatar_url: string;
}

export const createDefaultMemberDetail = (): MemberDetailEntity => ({
    id: 0,
    name: '',
    company: '',
    bio: '',
    login: '',
    avatar_url: ''
});