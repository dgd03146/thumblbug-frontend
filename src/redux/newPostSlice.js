import { createSlice } from "@reduxjs/toolkit";

const newPostSlice = createSlice({
    name: "newpost",
    initialState: {
        category: "game",
        summary: "",
        title: "",
        thumbnails: new Array(),
        goal: "",
        startDate: "",
        endDate: "",
        rewards: [
            {
                rewardItem: "선물없이 후원하기",
                fundingPrice: 1000
            }
        ],
        plan: "",
        creatorName: "",
        creatorBiography: ""
    },
    reducers: {
        setCategory(state, action){
            state.category = action.payload
        },
        setSummary(state, action){
            state.summary = action.payload
        },
        setTitle(state, action){
            console.log(action.payload);
            state.title = action.payload
        },
        setThumbnails(state, action){
            // if(state.thumbnails) state.thumbnails = action.payload
            // else state.thumbnails = [action.payload]
            state.thumbnails = action.payload
        },
        setGoal(state, action){
            state.goal = action.payload
        },
        setStartDate(state, action){
            state.startDate = action.payload
        },
        setEndDate(state, action){
            state.endDate = action.payload
        },
        setRewards(state, action){
            state.rewards = action.payload
        },
        setPlan(state, action){
            state.plan = action.payload
        },
        setCreatorName(state, action){
            state.creatorName = action.payload
        },
        setCreatorBiography(state, action){
            state.creatorBiography = action.payload
        }
    },
    extraReducers: {}
})

export default newPostSlice.reducer
export const {
    setCategory,
    setSummary,
    setTitle,
    setThumbnails,
    setGoal,
    setStartDate,
    setEndDate,
    setRewards,
    setPlan,
    setCreatorName,
    setCreatorBiography
} = newPostSlice.actions