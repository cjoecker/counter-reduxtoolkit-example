import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type CurrentDisplayState = {
    counterNumber: number
}

let initialState: CurrentDisplayState = {
    counterNumber: 0,
};


const counterSlice = createSlice({
    name: 'Counter',
    initialState: initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.counterNumber = state.counterNumber + action.payload
        },
        decrement(state, action: PayloadAction<number>) {
            state.counterNumber = state.counterNumber - action.payload
        }
    }
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer
