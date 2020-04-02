import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "./store";
import axios, { AxiosError } from "axios";


type FunFactState = {
    funFact: string
}

let initialState: FunFactState = {
    funFact: "",
};


const funFactSlice = createSlice({
    name: 'FunFact',
    initialState: initialState,
    reducers: {
        setFunFact(state, action: PayloadAction<string>) {
            state.funFact = action.payload
        },
    }
});


export const getFunFact = (number:Number): AppThunk => async dispatch => {
    await dispatch(setFunFact("Loading..."));

    axios.get(`http://numbersapi.com/${number}`)
        .then((answer) => {
            dispatch(setFunFact(answer.data));
        })
        .catch((error: AxiosError) => {
            dispatch(setFunFact(`Error: ${error.response}`));
        })
};

export const {setFunFact} = funFactSlice.actions;

export default funFactSlice.reducer