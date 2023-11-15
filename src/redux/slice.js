import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'counterApp',
    initialState:{
        value:0
    },
    // actions should be created/mentioned inside this reducers key as object
    reducers:{
        // logics to update state

        // function to increment 
        increment:(state, action)=>{
            state.value += action.payload
            
        },
        // if its a argument function then it can be only be accessed by the action and value in payload (action payload il maathrey value kittathollu)

        // function to decrement
        decrement:(state, action)=>{
            state.value -= action.payload
        },
        // function to reset
        reset:(state)=>{
            state.value =0
        }

    }
})

// action is required by component inorder to update state
export const{increment,decrement,reset}=slice.actions

// reducer is required is store to change the state value
export default slice.reducer