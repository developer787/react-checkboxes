import { configureStore } from "@reduxjs/toolkit";
import checklistReducer from "../features/checklist/checklistSlice";

export const store = configureStore({
  reducer: {
    checklist: checklistReducer,
  },
});
