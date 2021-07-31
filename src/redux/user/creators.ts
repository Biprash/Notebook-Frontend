import server from "../../server/server";
import { AppThunk } from "../store";
import { Login } from "./types";
import { authFail, authLogin, authStart, authLogout, getUser } from "./userSlice";

export const login = ({email, password}: Login): AppThunk => async (dispatch) => {
    try {
        dispatch(authStart())
        await server.get(process.env.REACT_APP_DOMAIN+'/sanctum/csrf-cookie')
        const response = await server.post(process.env.REACT_APP_DOMAIN+'/login', {
            email: email,
            password: password
        })
        console.log(response, 'res');
        
        if (response.data?.two_factor === false) {
            const user = await server.get('/user/user')
            console.log(user, 'user');
            
            if (user.data)
                dispatch(authLogin(user.data))
        }
    } catch (error) {
        dispatch(authFail(error))
    } 
}

export const fetchUser = (): AppThunk => async (dispatch) => {
    try {
        dispatch(authStart())
        const user = await server.get('/user/user')
        console.log(user, 'user');
        
        if (user?.data)
            dispatch(getUser(user.data))
    } catch (error) {
        dispatch(authFail(error))
    }
}

export const logout = (): AppThunk => async (dispatch) => {
    try {
        dispatch(authStart())
        await server.get(process.env.REACT_APP_DOMAIN+'/sanctum/csrf-cookie')
        const response = await server.post(process.env.REACT_APP_DOMAIN+'/logout')
        console.log(response, 'res');
        
        if (!response.data) {
            dispatch(authLogout())
        }
    } catch (error) {
        dispatch(authFail(error))
    } 
}