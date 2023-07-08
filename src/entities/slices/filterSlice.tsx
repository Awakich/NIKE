import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Sort } from "../../types/models";

type Filters = {
    open: boolean,
    sortType: Sort,
}

const initialState: Filters = {
    open: false,
    sortType: {
        name: '',
        sort: 'desc',
    },
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        closeFilter(state, action: PayloadAction<boolean>): void {
            state.open = action.payload
        },
        sortTypes(state, action: PayloadAction<Sort>): void {
            state.sortType = action.payload;
        },
    },
});

export const filterSelector = (state: RootState): boolean => state.filter.open
export const sortSelector = (state: RootState) => state.filter.sortType

export const { closeFilter, sortTypes } = filterSlice.actions;

export default filterSlice.reducer;