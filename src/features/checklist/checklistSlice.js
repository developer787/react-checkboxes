import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      type: "PROCEDURE",
      description: "Importance Of Food Safety",
      completed: false,
    },
    {
      id: 2,
      type: "PROCEDURE",
      description: "Washing Hands and Wearing Gloves",
      completed: false,
    },
    {
      id: 3,
      type: "TASK",
      description: "Demonstrate Proper Handwashing",
      completed: false,
    },
  ],
};

export const checklistSlice = createSlice({
  name: "checklist",
  initialState,
  reducers: {
    itemCompleted: (state, action) => {
      const { items } = current(state);
      let mappedItems = items.map((i) => {
        if (i.id === action.payload.id) {
          return {
            ...i,
            completed: !i.completed,
          };
        } else {
          return i;
        }
      });
      return {
        ...state,
        items: mappedItems,
      };
    },
  },
});

export const { itemCompleted } = checklistSlice.actions;

export const selectItems = (state) => state.checklist.items;

export const allCompleted = (state) => {
  const items = selectItems(state);
  return items.every((item) => item.completed);
};

export default checklistSlice.reducer;
