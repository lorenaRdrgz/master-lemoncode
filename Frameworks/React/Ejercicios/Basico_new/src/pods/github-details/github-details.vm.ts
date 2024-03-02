export interface MemberDetailEntity {
    id: string;
    name: string;
    company: string;
    bio: string;
    login: string;
    avatar_url: string;
}

export const createDefaultMemberDetail = (): MemberDetailEntity => ({
    id: '',
    name: '',
    company: '',
    bio: '',
    login: '',
    avatar_url: ''
});