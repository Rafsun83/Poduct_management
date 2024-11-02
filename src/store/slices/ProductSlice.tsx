import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
}

const initialState: Product[] = [];

const productstSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    deleteProducts: (state, action: PayloadAction<string>) => {
      return state.filter((product) => product.id !== action.payload);
    },
    updateProducts: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export default productstSlice.reducer;

export const { addProduct, deleteProducts, updateProducts } = productstSlice.actions;
