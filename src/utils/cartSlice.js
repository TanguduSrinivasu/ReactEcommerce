import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cartState : false,
        cartItems : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
        cartTotalAmount : 0,
        cartTotalQuantity : 0
    },

    reducers : {
        openCart : (state) => {
            state.cartState = true;
        },

        closeCart : (state) => {
            state.cartState = false;
        },

        addItemToCart : (state, action) => {

            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            // const itemIndex = state.cartItems.map(item => item.id).indexOf(action.payload.id); (not best approach)
            // here we used findIndex because we need to find the index in the array of objects we can use indexOf if we want to find the index in the simple array
            // first checking whether the item which is going to pushed is already present in the cartItems or not
            if(state.cartItems[itemIndex]?.cartQuantity > 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success(`${action.payload.title} Quantity Increased`)
            }
            else {
                const temp = {...action.payload ,  cartQuantity : 1};
                state.cartItems.push(temp);
                toast.success(`${action.payload.title} added to the Cart`)
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },

        removeItemFromCart : (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);
            // item removed from the cartItems Array
            state.cartItems = removeItem;
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
            toast.success(`${action.payload.title} removed from the Cart`);

        },

        increaseCartQty : (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if(state.cartItems[itemIndex]?.cartQuantity > 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success(`${action.payload.title} Quantity Increased`)
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems)); 
        },

        decreaseCartQty : (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if(state.cartItems[itemIndex]?.cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.success(`${action.payload.title} Quantity Decreased`)
            }
            else if(state.cartItems[itemIndex]?.cartQuantity === 1) {
                const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);
                // item removed from the cartItems Array
                state.cartItems = removeItem;
                localStorage.setItem('cart', JSON.stringify(state.cartItems));
                toast.success(`${action.payload.title} removed from the Cart`);
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },

        clearCartItems : (state) => {
            state.cartItems = [];
            toast.success('Cart Items Cleared');
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },

        totalCartQuantity : (state) => {
            let totalQuantity = state.cartItems.reduce((totalQty, cartItem) => {
                totalQty += cartItem.cartQuantity;
                return totalQty;
            }, 0)

            state.cartTotalQuantity = totalQuantity;
        },

        totalCartAmount : (state) => {
            let totalAmount = state.cartItems.reduce((totalAmt, cartItem) => {
                let amount = cartItem.price * cartItem.cartQuantity;
                totalAmt += amount;
                return totalAmt; 
            }, 0)

            state.cartTotalAmount = totalAmount;
        }
        
    }
})

export const {openCart, closeCart, addItemToCart, removeItemFromCart, increaseCartQty, decreaseCartQty, clearCartItems, totalCartAmount, totalCartQuantity} = cartSlice.actions;
export default cartSlice.reducer;