import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AUTH_TOKEN_HEADER } from "../../../constants/apiConstants";
import { LoginControllerApi } from "../../../api";
import { User } from "../../../api/models/user";

export const loginThunk: any = createAsyncThunk('auth/loginThunk', async (credentials: any) => {
    const user: User = {
        "username": credentials.username,
        "password": credentials.password,
        "firstName": null, "lastName": null, "email": null
    }
    const { data, headers }: any = await new LoginControllerApi().login(user)
    const token = headers.get(AUTH_TOKEN_HEADER)
    return { data, token }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: {
            token: "",
            user: {}
        },
        status: 'idle',
        error: null
    },
    reducers: {
        logoutReducer: (state: any) => { state.token = "" },
        signUpReducer: () => {}
    },
    extraReducers(builder) {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                console.log("payload: ", action.payload)
                state.status = 'fulfilled'
                state.data.token = action.payload.token
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
})

export const { logoutReducer, signUpReducer } = authSlice.actions
export default authSlice.reducer
export const selectToken = (state: any) => state.auth.data.token