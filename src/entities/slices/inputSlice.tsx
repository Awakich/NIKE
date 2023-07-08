import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Input = {
    value: string;
}

const initialState: Input = {
    value: '',
}

const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        changeInputValue(state, action: PayloadAction<string>) {
            state.value = action.payload;
        }
    }
})

export const inputSelector = (state: RootState) => state.input.value

export const { changeInputValue } = inputSlice.actions;
export default inputSlice.reducer