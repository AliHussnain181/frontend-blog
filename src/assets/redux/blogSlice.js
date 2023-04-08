import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBlog = createAsyncThunk(
  'blog/getBlog',
  async () => {
    const response = await fetch(`http://localhost:5000/api/b1/blog`, {
      withCredentials: true,
    })
    const res = await response.json();
    return res;
  }
);



export const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    data: [],
    loading: false,
    faild: false,
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
      .addCase(getBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.faild = null;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.faild = action.payload;
      })

  },
});

export const { clearError, clearMessage } = blogSlice.actions;


export default blogSlice.reducer
