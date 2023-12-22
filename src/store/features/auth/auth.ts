import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AUTH_TOKEN_HEADER } from "../../../constants/apiConstants";
import { LoginControllerApi, RegistrationControllerApi } from "../../../api";
import { User } from "../../../api/models/user";

export const loginThunk: any = createAsyncThunk('auth/loginThunk', async (credentials: any) => {
    const user: User = {
        "username": credentials.username,
        "password": credentials.password,
        "firstName": "", "lastName": "", "email": ""
    }
    const { data, headers }: any = await new LoginControllerApi().login(user)
    const token = headers.get(AUTH_TOKEN_HEADER)
    return { data, token }
})

export const registerStudentThunk: any = createAsyncThunk('auth/registerStudentThunk', async (user: User) => {
    const response : any = await new RegistrationControllerApi().registerStudent(user)
    return response.data
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
        logoutReducer: (state: any) => { state.data.token = "" },
        signUpReducer: () => {}
    },
    extraReducers(builder) {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.data.token = action.payload.token
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
            .addCase(registerStudentThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(registerStudentThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.data.user = action.payload
            })
            .addCase(registerStudentThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
})

export const { logoutReducer, signUpReducer } = authSlice.actions
export default authSlice.reducer
export const selectToken = (state: any) => state.auth.data.token
export const selectUser = (state: any) => state.auth.data.user