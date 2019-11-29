
export interface User {
    username: string;
    mailid: string;
    password: string;
    id?: number;
}

export interface Usergroups {
    name: string;
    userId: number;
    groupId: number;
    id?: number;
}
export interface Groups {
    name: string;
    desc: string;
    id?: number;
}

export interface Messages {
    message: string;
    groupid: number;
    userid: number;
    username: string;
    id?: 1;
}
