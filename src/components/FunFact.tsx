import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFunFact} from "../services/FunFact_Slice";
import {RootState} from "../services/rootReducer";

function FunFact() {

    const dispatch = useDispatch();
    const {counterNumber} = useSelector((state: RootState) => state.Counter);
    const {funFact} = useSelector((state: RootState) => state.FunFact);

    return (
        <div className="App">
            <h4>{funFact}</h4>
            <button
                onClick={(e) => {
                    dispatch(getFunFact(counterNumber))
                }}>
                Get Number Fun Fact
            </button>
        </div>
    );
}

export default FunFact;
