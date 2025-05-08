import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { request } from "../../config/request";

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (userData: any, { rejectWithValue }) => {
        try {
            const response = await request.post("/auth/register", userData);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.response || "Xatolik yuz berdi😒 ");
        }
    }
)

export interface AuthState {
    user: null | { token: string; };
    loading: null | boolean;
    error: null | string;
}

const initialState: AuthState = {
    //userga qiymat beriladi token userga tenglashtiriladi
    user: localStorage.getItem("token") ? {
        token: JSON.parse(localStorage.getItem("token")!)
    } : null,                   // localStoregedan tokenni olish
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
        setUser: (state, action: PayloadAction<{ token: string }>) => {
            state.user = action.payload;
            localStorage.setItem("token", JSON.stringify(action.payload)); // tokenni localStoragega saqlash
        },
        logout(state) {
            state.user = null;
            localStorage.removeItem("token"); // tokenni localStoragedan o'chirish
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
                state.user = { token: action.payload.data?.access_token };
                localStorage.setItem("token", JSON.stringify(action.payload.data.access_token)); // tokenni localStoragega saqlash
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    },
});

export const { setUser, logout } = authReducer.actions;

export default authReducer.reducer;