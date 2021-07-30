import { Action, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/userSlice";
import { ThunkAction } from "redux-thunk";

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action>