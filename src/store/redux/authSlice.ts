import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    user: null | { token: string; };
}

const initialState: AuthState = {
    //userga qiymat beriladi token userga tenglashtiriladi
    user: JSON.parse(localStorage.getItem('token') || "null"), // localStoregedan tokenni olish
};

const authSlice = createSlice({
    name: "auth",
    initialState,

    // reducers ichiga turli xil logikalar yoziladi lekin faqat authga tegishlilari aynan shu fileda 
    reducers: {  
        // Bu yerda login yoki register qilinganda backdan token keladi 
        // shuni localStoragega yozish fun-si yozildi   
        setUser: (state, action: PayloadAction<{ token: string }>) => {
            state.user = action.payload;
            localStorage.setItem("token", JSON.stringify(action.payload)); // tokenni localStoragega saqlash
        }
    }
});


export default authSlice.reducer;

export const { setUser } = authSlice.actions;
