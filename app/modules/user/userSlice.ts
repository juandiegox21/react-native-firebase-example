import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
    setUser: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

// selectors
export const selectUser = (state) => state.user.name;

export default userSlice.reducer;
