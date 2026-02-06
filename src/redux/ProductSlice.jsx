// 17) video-17 , part-1 product cart redux example project.
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const ProductSlice = createSlice({      // ietha product che quantity store krat ahe.
    name : "cart",
    initialState : {
      quantity : 0,
      items : [],                     // je product add to cart kela tya che information yenar.
    },
   reducers : {                        // reducer function is the backbone of our project
       addTocart : (state,action) =>{
          state.quantity = state.quantity+1;
          state.items.push(action.payload);
       }
   }
      
    })
export let {addTocart} = ProductSlice.actions;
export default ProductSlice.reducer;

// main program logic is written in above .now it can be call means dispatch with UI it can be written in productlist.