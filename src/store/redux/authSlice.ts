import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { request } from "../../config/request";

export const registerUser = createAsyncThunk(                                   //  thunk yaratildi yani back ga so'rov 
    "authReducer/registerUser",                                                 //  thunk nomi >>> label
    async (userData: object, { rejectWithValue }) => {
        try {
            const response = await request.post("/auth/register", userData);    // backga boradigan url 
            return response.data.data;
        } catch (error: string | null| unknown) {                // errorni tutib olish
            return rejectWithValue(error || "Xatolik yuz berdi😒 ");
        }
    }
)

export interface AuthState {
    user: null | { userId: string };
    token: null | { accessToken: string; refreshToken: string }
    loading: boolean;
    error: null | string;
}

const initialState: AuthState = {
    //userga qiymat beriladi token userga tenglashtiriladi
    user: null,
    token:  null,  
    loading: false,
    error: null,
};

const authReducer = createSlice({
    name: "authReducer",
    initialState,
    // reducers ichiga turli xil logikalar yoziladi lekin faqat authga tegishlilari aynan shu fileda 
    reducers: {
        // Bu yerda login yoki register qilinganda backdan token keladi 
        // shuni localStoragega yozish fun-si yozildi   
        setUser: (state, action: PayloadAction<{ userId: string }>) => {
            state.user = action.payload;
            localStorage.setItem("userId", JSON.stringify(action.payload.userId)); // userIdni localStoragega saqlash
        },
        setToken: (state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) => {
            state.token = {
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
            };
            localStorage.setItem("token", JSON.stringify(state.token));
        },
        logout(state) {
            state.user = null;
            localStorage.removeItem("token"); // tokenni localStoragedan o'chirish
            localStorage.removeItem("user"); // userni localStoragedan o'chirish
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                const tokens = {
                    accessToken: action.payload.accessToken,
                    refreshToken: action.payload.refreshToken
                };
                state.token = tokens
                localStorage.setItem("token", JSON.stringify(tokens)); // tokenni localStoragega saqlash
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    },
});

export const { setUser, setToken, logout } = authReducer.actions;

export default authReducer.reducer;