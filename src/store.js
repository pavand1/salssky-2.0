import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/auth/authSlice";
import loaderReducer from "./feature/loader/loader";
import voiceReducer from "./feature/util";
import controlsSlice from "./feature/voice-controls/controlsSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        loader: loaderReducer,
        voices: voiceReducer,
        controls: controlsSlice,
    },
});

export default store;
