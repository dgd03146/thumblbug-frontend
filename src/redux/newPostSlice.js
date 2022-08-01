import { createSlice } from "@reduxjs/toolkit";

const newPostSlice = createSlice({
    name: "newpost",
    initialState: {
        category: "",
        title: "",
        summary: "",
    },
    reducers: {
        setCategory(state, action){
            state = {...state, category: action.payload}
        },
        setTitle(state, action){
            state = {...state, title: action.payload}
        },
        setSummary(state, action){
            state = {...state, summary: action.payload}
        },
    },
    extraReducers: {}
})

export default newPostSlice.reducer