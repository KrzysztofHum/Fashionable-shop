import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uploadService from "./uploadService";

const initialState = {
  images: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const uploadImg = createAsyncThunk(
  "upload/images",
  async (data, thunkAPI) => {
    try {
      return await uploadService.uploadImg(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const uploadImgSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadImg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadImg.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = action.payload;
      })
      .addCase(uploadImg.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.images = action.error;
      });
  },
});

export default uploadImgSlice.reducer;
