import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInput {
    value: string;
}

const initialState: IInput = {
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