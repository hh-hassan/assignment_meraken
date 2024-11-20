import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    
    name: 'cart',

    initialState: {
        items: [],
    },

    reducers: {
        
        addItem: (state, action) => {
            
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) existingItem.count += 1;

            else
                state.items.push({
                    ...action.payload,
                    count: 1
                });
        },
        
        removeItem: (state, action) => {
            
            const existingItem = state.items.find(item => item.id === action.payload.id);

            existingItem.count -= 1;

            if(existingItem.count === 0)
            {
                const index = state.items.findIndex(item => item.id === action.payload.id);
                state.items.splice(index, 1);
            }
        },
        
        clearCart: (state, action) => {
            state.resId = action.payload;
            state.items.length = 0;

            /* or

            return { items: [] };

            i.e either mutate the original state or return a new state
                the returned state will replace the original state */ 
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;