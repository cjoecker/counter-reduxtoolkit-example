import { combineReducers } from '@reduxjs/toolkit'
import Counter_Reducer from "./Counter_Reducer";


const rootReducer = combineReducers({
  Counter: Counter_Reducer,
  // FunFact: FunFact_Reducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
