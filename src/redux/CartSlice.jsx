// 17) video-17 , part-1 product cart redux example project.

import { createSlice } from "@reduxjs/toolkit";


const  CartSlice = createSlice({
    name :"cart",
    initialState : {
        items : []
    },
    reducers :{
        addToCart:(state, action) => {
             const product = action.payload;
              let Productexisting = state.items.find((item) => item.id === product.id);

             if(Productexisting) {
               Productexisting.quantity = Productexisting.quantity + 1;
               } else {
              state.items.push({ ...product, quantity: 1 });
            }
         },

        removeFromCart:(state,action)=>{
           state.items = state.items.filter((item)=>item.id!=action.payload)
        },
        incQty:(state,action)=>{
         const item = state.items.find((item) => item.id===action.payload)
         if(item)
         {
            item.quantity = item.quantity+1;
         }
        },
        decQty:(state,action)=>{
        const item = state.items.find((item) => item.id===action.payload)
         if(item){
            if(item.quantity > 1){
             item.quantity = item.quantity - 1;
          }
          else{
           state.items = state.items.filter(
            (product)=> product.id !== action.payload
          );
       }
     }
        },
        clearCart:(state,action)=>{

        },
    } 
})
export let {addToCart,removeFromCart,incQty,decQty,clearCart} = CartSlice.actions;
export default CartSlice.reducer