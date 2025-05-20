import { configureStore, createSlice } from "@reduxjs/toolkit";

type initialType = {
    language: boolean
};


const initialState: initialType = {
  language: false,
};

const MainReducer = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    LanSwitcher: (state) => {
      state.language = !state.language;
    },
  },
});

export const main = MainReducer.reducer
export const { LanSwitcher } = MainReducer.actions

export const store = configureStore({
  reducer: {
    main: main,
  },
});

export type RootState = ReturnType<typeof store.getState>;