import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";


export const data = configureStore({
    // reducer can only update value of state in store
    // reducer key is predefined (object which can hold more than one reducer)
    reducer:{

        // reducer is coming from counterSlice since we are export reducer as export 
        counter:slice
    }
})