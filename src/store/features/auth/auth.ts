import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AUTH_TOKEN_HEADER } from "../../../constants/apiConstants";
import { LoginControllerApi, RegistrationControllerApi } from "../../../api";
import { User } from "../../../api/models/user";
import { ReducerState } from "../../types";

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
            user: {},
            regStepKey: ""
        },
        status: ReducerState.IDLE,
        error: null
    } as any,
    reducers: {
        statusReducer: (state: any, action: { payload: ReducerState }) => { 
            switch (action.payload) {
                case ReducerState.IDLE:
                    state.status = ReducerState.IDLE
                    state.error = null
                    break
            }
        },
        logoutReducer: (state: any) => { state.data.token = "" },
        regStepReducer: (state: any, action: { payload: string }) => {
            state.data.regStepKey = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.status = ReducerState.PENDING
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.status = ReducerState.FULFILLED
                state.data.token = action.payload.token
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.status = ReducerState.REJECTED
                state.error = action.error.message
            })
            .addCase(registerStudentThunk.pending, (state) => {
                state.status = ReducerState.PENDING
            })
            .addCase(registerStudentThunk.fulfilled, (state, action) => {
                state.status = ReducerState.FULFILLED
                state.data.user = action.payload
            })
            .addCase(registerStudentThunk.rejected, (state, action) => {
                state.status = ReducerState.REJECTED
                state.error = action.error.message
            })
    }
})

export const { logoutReducer, regStepReducer, statusReducer } = authSlice.actions
export default authSlice.reducer
export const selectToken = (state: any) => state.auth.data.token
export const selectStatus = (state: any) => state.auth.status
export const selectError = (state: any) => state.auth.error
export const selectUser = (state: any) => state.auth.data.user
export const selectRegStepKey = (state: any) => state.auth.data.regStepKey