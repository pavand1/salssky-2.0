import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedRecitation: "US English (Male)",
    speed: 1.0,
    size: 100,
    darkMode: false,
};

const controlsSlice = createSlice({
    name: "controls",
    initialState,
    reducers: {
        setSelectedRecitation: (state, action) => {
            state.selectedRecitation = action.payload;
        },
        setSpeed: (state, action) => {
            state.speed = action.payload;
        },
        setSize: (state, action) => {
            state.size = action.payload;
        },
        setDarkMode: (state, action) => {
            state.darkMode = action.payload;
        },
    },
});

export const { setSelectedRecitation, setSpeed, setSize, setDarkMode } =
    controlsSlice.actions;
export default controlsSlice.reducer;

export const selectSelectedRecitation = (state) =>
    state.controls.selectedRecitation;
export const selectSpeed = (state) => state.controls.speed;
export const selectSize = (state) => state.controls.size;
export const selectDarkMode = (state) => state.controls.darkMode;
