import { createSlice } from "@reduxjs/toolkit";

const projectSlice=createSlice({
    name:"project",
    initialState :{
        list:[],
    },
    reducers:{
        addProject:(state, action)=>{
            state.list.push({
                id:Date.now(),
                ...action.payload,
            });
        },
    },
});
export const{addProject}=projectSlice.actions;
export default projectSlice.reducer;