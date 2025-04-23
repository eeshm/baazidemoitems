import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { InventoryItem } from "@/types/inventory";

interface InventoryState {
  data: InventoryItem[];
  loading: boolean;
  error: string | null;
}

const initialState: InventoryState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchInventory = createAsyncThunk(
  "inventory/fetchInventory",
  async () => {
    const response = await axios.get("https://dev.electorq.com/dummy/inventory");
    return response.data.data as InventoryItem[];
  }
);

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default inventorySlice.reducer;
