// 17) video-17 , part-1 product cart redux example project.
// import React from 'react'
// import { useSelector } from 'react-redux'
// import "./Cart.css"
 
// const Cart = () => {

//   const items = useSelector((state) => state.myCart.items)

//   return (
//     <>
//       <div className='container mt-4'>

//         <h3 className='mb-3 text-center'>🛒 Shopping Cart</h3>

//         <table className='table table-striped table-hover shadow'>

//           <thead className='bg-dark text-white'>
//             <tr>
//               <th>Product</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Subtotal</th>
//               <th>Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {
//               items.map((item) => {
//                 return (
//                     <tr key={item.id}>
                  
//                   <td className='product-info'>
//                      <img src={item.image} alt="" />
//                     <span>{item.title}</span>
//                    </td>
                 
                  
//                     <td>₹ {item.price}</td>

//                     <td>
//                       <span className='badge bg-secondary'>
//                         {item.quantity}
//                       </span>
//                     </td>

//                     <td className='fw-bold text-success'>
//                       ₹ {item.price * item.quantity}
//                     </td>

//                     <td>
//                       <button className='btn btn-success btn-sm '>
//                         ➕ Increase Qty
//                       </button>

//                       <button className='btn btn-sm btn-warning '>
//                         ➖ Decrease Qty
//                       </button>

//                       <button className='btn btn-sm btn-danger'>
//                         🗑 Remove Item
//                       </button>
//                     </td>
//                   </tr>
//                 )
//               })
//             }
//           </tbody>

//         </table>

//       </div>
//     </>
//   )
// }

// export default Cart

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Cart.css"
import { addToCart, incQty,decQty, removeFromCart } from './redux/CartSlice'



const Cart = () => {

  const items = useSelector((state) => state.myCart.items)
   

          let Totalprice = 0;
            items.forEach(item => {
             Totalprice += item.price * item.quantity;
             });

  let dispatch = useDispatch();

  return (
    <div className='container mt-4'>

      <h3 className='cart-heading'>Shopping Cart</h3>

      <table className='table cart-table'>

        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            items.length === 0 ? (
              <tr>
                <td colSpan="5" className='text-center empty-cart'>
                  Your Cart is Empty 🛒
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.id}>
                  
                  <td className='product-info'>
                    <img src={item.image} alt="" />
                    <span>{item.title}</span>
                  </td>

                  <td>₹ {item.price}</td>

                  <td>{item.quantity}</td>

                  <td className='subtotal'>
                    ₹ {item.price * item.quantity}
                  </td>

                  <td>
                    <div className="cart-btn-group">

                      <button className='btn cart-inc'onClick={()=>dispatch(incQty(item.id))}>
                        Increase Qty
                      </button>

                      <button className='btn cart-dec'onClick={()=>dispatch(decQty(item.id))}>
                        Decrease Qty
                      </button>

                      <button className='btn cart-remove'onClick={()=>dispatch(removeFromCart(item.id))}>
                        Remove Item
                      </button>

                    </div>
                  </td>

                </tr>
              ))
            )
          }
        </tbody>

      </table>

        <div>
         <hr />
        <h3>Total Price - ₹ {Totalprice}</h3>
        </div>

    </div>
  )
}

export default Cart

