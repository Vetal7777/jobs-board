import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initialState from "../../state/initialState";
import ItemI from "../../models/item";

export const appSlice = createSlice({
    name: 'App',
    initialState,
    reducers: {
        getSuccess(state,action:PayloadAction<ItemI[]>){
            state.jobsList = action.payload;
            state.isLoading = false;
        },
        failed(state,action:PayloadAction<string>){
            state.error = action.payload;
            state.isLoading = false;
        }
    }
})

export default appSlice.reducer;