import { createSlice } from '@reduxjs/toolkit';
import { getCourses, getToken } from './operations';

const initialState = {
  courses: [],
  token: null,
  error: null,
  isLoading: false,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getToken.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoading = false;
      })
      .addCase(getToken.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getCourses.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.courses = action.payload.courses;
        state.isLoading = false;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const coursesReducer = coursesSlice.reducer;
