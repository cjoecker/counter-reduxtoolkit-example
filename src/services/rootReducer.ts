import { combineReducers } from '@reduxjs/toolkit'
import Counter_Reducer from "./Counter_Slice";
import FunFact_Reducer from "./FunFact_Slice";


const rootReducer = combineReducers({
  Counter: Counter_Reducer,
  FunFact: FunFact_Reducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
