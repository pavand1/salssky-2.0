import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedVoice: {
        languageCode: "en-US",
        name: "en-US-Journey-F",
        ssmlGender: "FEMALE",
    },
    voiceOptions: [
        {
            languageCode: "en-US",
            name: "en-US-Journey-F",
            ssmlGender: "FEMALE",
        },
        {
            languageCode: "en-US",
            name: "en-US-Casual-K",
            ssmlGender: "MALE",
        },
        {
            languageCode: "en-IN",
            name: "en-IN-Neural2-A",
            ssmlGender: "FEMALE",
        },
        {
            languageCode: "en-IN",
            name: "en-IN-Neural2-B",
            ssmlGender: "MALE",
        },
        {
            languageCode: "en-GB",
            name: "en-GB-Neural2-A",
            ssmlGender: "FEMALE",
        },
        {
            languageCode: "en-GB",
            name: "en-GB-Neural2-B",
            ssmlGender: "MALE",
        },
    ],
};

const voices = createSlice({
    name: "voices",
    initialState,
    reducers: {
        setSelectedVoice: (state, action) => {
            state.selectedVoice = action.payload;
        },
    },
});

export const { setSelectedVoice } = voices.actions;

export default voices.reducer;

export const selectSelectedVoice = (state) => state.voices.selectedVoice;
