import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  nickname: string;
  name: string;
  sername: string;
  phone: number;
  email: string;
  sex: string;
  advantages: Array<string>;
  radio: string;
  checkbox: Array<string>;
  about: string;
}

const initialState: UserState = {
  nickname: "",
  name: "",
  sername: "",
  phone: 0,
  email: "",
  sex: "",
  advantages: [],
  radio: "",
  checkbox: [],
  about: "",
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMain: (state = initialState, action: any) => {
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },
    setFirstStep: (state = initialState, action: any) => {
      state.nickname = action.payload.nickname;
      state.name = action.payload.name;
      state.sername = action.payload.sername;
      state.sex = action.payload.sex;
    },
  },
});

export const { setMain, setFirstStep } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectUser = (state: RootState) => state.user.name

export default userSlice.reducer;

//export const userSelector = (store) => store.user;
