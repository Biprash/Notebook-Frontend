export interface Login {
    email: string
    password: string
}

export interface User {
    id: number,
    name: string,
    email: string, 
    profile_pic: string,
}

export enum UserActionTypes {
    AUTH_START = "AUTH_START",
    AUTH_FAIL = "AUTH_FAIL",
    REGISTER = "REGISTER",
    LOGIN = "LOGIN",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    LOGOUT = "LOGOUT"
}

export interface UserState {
    readonly loading: boolean;
    readonly user?: User;
    readonly fetched: boolean;
    readonly error?: string;
}