// 17) video-17 , part-1 product cart redux example project.
import React from 'react'
import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice"
import CartSlice from "./CartSlice";


const store = configureStore({  // it is used to store the globle data of app.💡 Simple language me  Store = App ka "Data Warehouse"
     reducer : {                         
       cart : ProductSlice ,     //aha tum batate ho kaunsa data store me rahega
       myCart: CartSlice     
      }
})
export default store
  