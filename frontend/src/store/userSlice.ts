import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './thunkFunctions';

const initialState = {
  userData: {
    id: '',
    email: '',
    name: '',
    role: '',
    image: '',
  },
  isAuth: false,
  isLoading: false,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder //
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
