import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment,decrement} from "../services/Counter_Slice";
import {RootState} from "../services/rootReducer";


function Counter() {

    const dispatch = useDispatch();

    const { counterNumber} = useSelector((state: RootState) => state.Counter);

    return (
        <div className="App">
            <h1>{counterNumber}</h1>
            <button
                onClick={(e) => {
                    dispatch(increment(1))
                }}>
                Sum + 1
            </button>
            &nbsp;
            <button
                onClick={(e) => {
                    dispatch(decrement(1))
                }}>
                Sum - 1
            </button>
        </div>
    );
}

export default Counter;
