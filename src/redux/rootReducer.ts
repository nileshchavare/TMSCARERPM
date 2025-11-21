import { combineReducers } from "@reduxjs/toolkit"
import { drawerReducer } from "../redux/reducers/drawer.reducer";
import counterReducer from "./slices/counter";
const rootReducer = combineReducers({
    drawerReducer, 
    counterReducer,
})

export default rootReducer