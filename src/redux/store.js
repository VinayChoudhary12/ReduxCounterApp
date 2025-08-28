import { configureStore } from "@reduxjs/toolkit";
import { Counterslices } from "./slices/Counterslices";

export const store = configureStore({
    reducer:{
        counter:Counterslices.reducer
    },
});


