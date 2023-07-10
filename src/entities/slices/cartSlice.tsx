import { RootState } from "entities/store";
import { createSlice } from "@reduxjs/toolkit";
import { CartItems } from "types/models";

type Cart = {
    cart: CartItems[]
}

const initialState: Cart = {
    cart: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart(state, action) {
            const findItem = state.cart.find(obj => obj.id === action.payload.id)

            if (findItem) {
                findItem.count++;
            } else {
                state.cart.push({
                    ...action.payload,
                    count: 1
                })
            }
        },

        removeCart(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        },

        clearCart(state) {
            state.cart = []
        }
    },
})

export const { addCart, clearCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;

export const cartSelector = (state: RootState) => state.cart.cart