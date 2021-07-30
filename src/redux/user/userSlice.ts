import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";
import { RootState } from "../store";

const initialState: UserState = {
    loading: false,
    user: undefined,
    fetched: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authStart: state => {
            state.loading=true
        },
        authFail: (state, {payload}: PayloadAction<UserState>) => {
            state.loading = false
            state.error = payload.error
        },
        authLogin: (state, {payload}: PayloadAction<User>) => {            
            state.loading=false
            state.user = payload
        },
        getUser: (state, {payload}: PayloadAction<User>) => {            
            state.loading=false
            state.user = payload
            state.fetched = true
        },
        authLogout: state => {            
            state.loading=false
            state.user = undefined
        }
    }

})

export const userSelector = (state: RootState) => state.user
export const userReducer = userSlice.reducer
export const { authStart, authFail, authLogin, getUser, authLogout } = userSlice.actions