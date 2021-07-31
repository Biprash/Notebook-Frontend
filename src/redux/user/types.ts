export interface Login {
    email: string
    password: string
}

export interface Register {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export interface User {
    id: number,
    name: string,
    email: string, 
    profile_pic: string,
}

export interface UserState {
    readonly loading: boolean;
    readonly user?: User;
    readonly fetched: boolean;
    readonly error?: string;
}