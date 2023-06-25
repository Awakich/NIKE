import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ISort } from "../../models";

interface IFilters {
    open: boolean,
    sortType: ISort,
}

const initialState: IFilters = {
    open: false,
    sortType: {
        name: '',
        sort: '',
    }
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        closeFilter(state, action: PayloadAction<boolean>): void {
            state.open = action.payload
        },
        sortTypes(state, action: PayloadAction<ISort>): void {
            state.sortType = action.payload;
        },
    },
});

export const filterSelector = (state: RootState): boolean => state.filter.open
export const sortSelector = (state: RootState) => state.filter.sortType

export const { closeFilter, sortTypes } = filterSlice.actions;

export default filterSlice.reducer;