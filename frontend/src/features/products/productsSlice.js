import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductsService from "./productsService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  products: [],
};

export const getProducts = createAsyncThunk("products", async (thunkAPI) => {
  try {
    return await ProductsService.getProducts();
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default productsSlice.reducer;
