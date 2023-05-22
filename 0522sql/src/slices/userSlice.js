import { createSlice } from "@reduxjs/toolkit";

// 유저 상태 (login, logout) 관리 slice
export const userSlice = createSlice ({
    name : "user",
    initialState : {
        user : null,
        loading : false
    },
    reducers : {
      login : (state, action) => {
          state.user = action.payload;
      },
      logout : (state) => {
        state.user = null;
      }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;