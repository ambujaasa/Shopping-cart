import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstname: "",
  image: "",
  lastname: "",
  _id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      console.log(action.payload.Data);
      //state.user = action.payload.data;
      state._id = action.payload.Data._id;
      state.firstname = action.payload.Data.firstname;
      state.lastname = action.payload.Data.lastname;
      state.email = action.payload.Data.email;
      state.image = action.payload.Data.image;
    },
    logoutRedux: (state, action) => {
      state._id = "";
      state.firstname = "";
      state.lastname = "";
      state.email = "";
      state.image = "";
    },
  },
});
export const { loginRedux, logoutRedux } = userSlice.actions;
export default userSlice.reducer;
