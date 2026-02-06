// 17) video-17 , part-1 product cart redux example project.
import React from 'react'
import "./ProductList.css"
import { useDispatch } from 'react-redux';
 import { addTocart } from './redux/ProductSlice';
import { addToCart } from "./redux/CartSlice";



function ProductList() {

 let dispatch = useDispatch();

  const products = [
    {
      id: 1,
      title: "Laptop",
      price: 55000,
      category: "Electronics",
      rating: 4.5,
      stock: "In Stock",
      description: "High performance laptop for coding and gaming.",
      image: "https://www.filme.fr/cdn/shop/products/location-apple-macbook-pro-16-intel-a-paris-et-montreuil-chez-filme.jpg?v=1705010904"
    },
    {
      id: 2,
      title: "Wireless Mouse",
      price: 2000,
      category: "Accessories",
      rating: 4.2,
      stock: "In Stock",
      description: "Ergonomic wireless mouse with long battery life.",
      image: "https://uniquec.com/wp-content/uploads/235.jpg"
    },
    {
      id: 3,
      title: "Mechanical Keyboard",
      price: 3000,
      category: "Accessories",
      rating: 4.7,
      stock: "Limited Stock",
      description: "RGB mechanical keyboard with smooth typing experience.",
      image: "https://mechanicalkeyboards.com/cdn/shop/files/17174-KTENS-Origin-Black.jpg?v=1708368015"
    },
    {
      id: 4,
      title: "Monitor",
      price: 45000,
      category: "Electronics",
      rating: 4.6,
      stock: "In Stock",
      description: "4K UHD monitor with high refresh rate display.",
      image: "https://www.tpstech.in/cdn/shop/files/Dell_S2725QC_27_UHD_4K_120Hz.webp?v=1766993788&width=533"
    },
    {
      id: 5,
      title: "Headphones",
      price: 1000,
      category: "Audio",
      rating: 4.1,
      stock: "Out of Stock",
      description: "Comfortable Bluetooth headphones with deep bass.",
      image: "https://hammeronline.in/cdn/shop/files/Bash_2.0_Bluetooth_Headphones.webp?v=1726899059"
    },
    {
      id: 6,
      title: "Speaker",
      price: 10000,
      category: "Audio",
      rating: 4.4,
      stock: "In Stock",
      description: "Premium studio speaker with crystal clear sound.",
      image: "https://smartixtech.com/cdn/shop/files/STUDIO_SPEAKER_SM_2_1080x.jpg?v=1725018840"
    }
  ];

  return (
    <div className="container mt-4">
      <div className="row">

        {
          products.map((item)=>{
            return(
              <div className="col-md-4 mb-4" key={item.id}>

                <div className="card product-card">

                  {/* Image */}
                  <div className="product-image-container">
                    <img src={item.image} alt={item.title} className="product-image" />
                  </div>

                  {/* Content */}
                  <div className="card-body product-footer">

                    <h5 className="product-title">{item.title}</h5>

                    <p className="product-category">{item.category}</p>

                    <p className="product-description">
                      {item.description}
                    </p>

                    <p className="product-price">₹ {item.price}</p>

                    {/* <p className="product-rating">⭐ {item.rating}</p> */}
                     {/* Manually add stars */}
                     <p className="product-rating  d-flex align-items-center">
                      <span className="star-rating mr-2">
                   <i className="bi bi-star-fill text-warning"></i>
                   <i className="bi bi-star-fill text-warning"></i>
                   <i className="bi bi-star-fill text-warning"></i>
                   <i className="bi bi-star-half text-warning"></i>
                   <i className="bi bi-star text-warning"></i>
                    </span> {item.rating}
                      </p>

                    

             <p className={ item.stock === "Out of Stock" ? "out-stock" : "in-stock" }> {item.stock} </p>
      
             <button
                className="btn btn-primary btn-block"
                 disabled={item.stock === "Out of Stock"}
                   onClick={() => {
                      dispatch(addTocart(item));   // 👉 ProductSlice quantity increase
                       dispatch(addToCart(item));   // 👉 CartSlice item store
                        }}> Add To Cart
                </button>

                  </div>

                </div>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default ProductList
