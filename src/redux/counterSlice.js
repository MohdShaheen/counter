import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counterApp',
    initialState:{
        value:0
    },
    // actions should be created/mentioned inside this reducers key as object
    reducers:{
        // logics to update state

        // function to increment 
        increment:(state)=>{
            state.value +=1
        },
        // function to decrement
        decrement:(state)=>{
            state.value -=1
        },
        // function to reset
        reset:(state)=>{
            state.value =0
        }

    }
})

// action is required by component inorder to update state
export const{increment,decrement,reset}=counterSlice.actions

// reducer is required is store to change the state value
export default counterSlice.reducer