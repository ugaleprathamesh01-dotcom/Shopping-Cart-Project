// 17) video-17 , part-1 product cart redux example project.

// ✅ Router, Routing, BrowserRouter React me kis liye use hote hai?
// 👉 Ye React me multiple pages / navigation banane ke liye use hote hain
// 👉 Page reload kiye bina page change hota hai
// note route last mai kro jab pure component complete hojaye.etc home,price ,about,cart.
// action ,reducer doni kam slice mdhe leto.
import React from 'react'
import Navigationbar from './Navigationbar'
import ProductList from './ProductList'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Cart from './Cart'
import Slider from './Components/Slider'


function App() {
  return (
    <>
    
    <BrowserRouter>  
     
    <Navigationbar/>
    
  
    <Routes>
      
    <Route path="/" element={ <> <Slider /> <ProductList /> </>  } />  {/* Slider he aata fakta home mdhe disnar 'shoping card' or 'ptoduct' mdhe click kelya var tya component mdhe nhi disnar */}

     
       <Route path="/cart" element={ < Cart/>} /> {/* Route decide karta hai konsa component kab show hoga */}
    </Routes>
    </BrowserRouter>
    
   
    </>
  )
}

export default App