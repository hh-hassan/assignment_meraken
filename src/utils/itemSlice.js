import { createSlice } from "@reduxjs/toolkit"

const itemSlice = createSlice({
    
    name: 'item',

    initialState: {
        items: null,
    },

    reducers: {
        
        addData: (state, action) => {
            state.items = action.payload;
        },
        
    },
});

export const { addData } = itemSlice.actions;

export default itemSlice.reducer;