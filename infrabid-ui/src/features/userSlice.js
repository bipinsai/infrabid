import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserData as fetchUserData } from '../api/userApi';  // Assuming you have this API function

// Async thunk for fetching user data
export const getUserData = createAsyncThunk(
  'user/getUserData',  // Action type prefix
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUserData();
      return response;  // Action payload when successful
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);  // Action payload when failed
    }
  }
);

const initialState = {
  user: {},
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
