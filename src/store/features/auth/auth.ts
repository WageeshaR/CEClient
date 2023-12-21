import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authenticate } from "../../../api/apiHandler";
import { AUTH_TOKEN_HEADER } from "../../../constants/apiConstants";

export const loginThunk: any = createAsyncThunk('auth/loginThunk', async (credentials: any) => {
    const { data, headers }: any = await authenticate(credentials.username, credentials.password)
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