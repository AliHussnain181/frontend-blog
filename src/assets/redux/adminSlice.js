import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const addBlog = createAsyncThunk(
  "blog/addBlog",
  async (e) => {
    const response = await axios.post(
      "http://localhost:5000/api/b1/add",
      e,
      {
        withCredentials: true,
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    return response.data;
  }
);

export const deleteBlog = createAsyncThunk(
  "blog/deleteBlog",
  async (id) => {

    const config = {
      withCredentials: true,
    };

    const response = await axios.delete(
      `http://localhost:5000/api/b1/blog/${id}`, config);
    return response.data;
  }
);


export const adminSlice = createSlice({
  name: 'blog',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(addBlog.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      })
      .addCase(deleteBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.error = null;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      })


  },
});

export const { clearError, clearMessage } = adminSlice.actions;


export default adminSlice.reducer
