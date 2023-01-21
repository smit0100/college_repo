import {createSlice} from "@reduxjs/toolkit"

const initialState={
    user:null
}

const userslice=createSlice({
    name:"user",
    initialState,
    reducers:{
       user:(state,action)=>{
        state.user=action;
       }
    }
})

export const {userData}=userslice.actions;
export default userslice.reducer