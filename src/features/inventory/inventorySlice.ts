import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export interface Subcomponent {
  component_id: string;
  component_name: string;
  is_subcomponent: boolean;
  parent_component_id: string | null;
  updated_at: string;
  created_at: string;
  has_subcomponent: boolean;
  hsn_code: string;
  sku_code: string;
  usable_quantity: number;
  damaged_quantity: number;
  discarded_quantity: number;
  last_updated: string;
  total_quantity: number;
}
export interface InventoryItem {
  component_id: string;
  component_name: string;
  is_subcomponent: boolean;
  parent_component_id: string | null;
  updated_at: string;
  created_at: string;
  has_subcomponent: boolean;
  hsn_code: string;
  sku_code: string;
  subcomponents: Subcomponent[];
}

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

export const fetchInventory = createAsyncThunk('inventory/fetchInventory', async () => {
  const response = await axios.get('/api/inventory');  // <<-- updated here
  return response.data;
});

const inventorySlice = createSlice({
  name: 'inventory',
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
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default inventorySlice.reducer;
