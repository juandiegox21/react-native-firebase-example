import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type User = {
  uid: string;
  email: string;
};

const initialState = {
  data: <User>{},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = userSlice.actions;

// selectors
export const selectUser = (state: RootState) => state.user.data;

// types
export type { User };

export default userSlice.reducer;
