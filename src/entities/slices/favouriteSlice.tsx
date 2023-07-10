import { RootState } from "entities/store";
import { createSlice } from "@reduxjs/toolkit";
import { FavouriteItems } from '../../types/models'

type Favourite = {
    favourite: FavouriteItems[]
}

const initialState: Favourite = {
    favourite: [],
}

const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addFavourite(state, action) {
            const findFavourite = state.favourite.find(obj => obj.id === action.payload.id)

            if (findFavourite) {
                return;
            } else {
                state.favourite.push({
                    ...action.payload,
                })
            }
        },

        removeFavourite(state, action) {
            state.favourite = state.favourite.filter(item => item.id !== action.payload.id)
        }
    }
})

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;

export const favouriteSelector = (state: RootState) => state.favourite.favourite;