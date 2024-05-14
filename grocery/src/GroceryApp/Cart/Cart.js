import './Cart.css'
import {context} from '../Products/Products'
import { useContext } from 'react'

const Cart = ({rating, title, price, id, images, brand, category}) => {
  
  const cartItems = Array(useContext(context))
    return(
        <>
        <h1>Cart Items</h1>
        {
          console.log(typeof cartItems)
        }
        
          
        </>
    )
}
export default Cart


// const CartItems = () => {
//   return(
//     <>
//       <div className='cart'>
//           <div className="cart-card">
//             <img className="product-image" src="" alt=""/>
//             <div className='product-details'>
//                 <h1>Product Name: </h1>
//                 <h5>Product Description: </h5>
//                 <div className='price-rating'>
//                    <h3>Price: $</h3>
//                    <h3>Rating: 3.5</h3>
//                 </div>
//           </div>
//       </div>
//     </div>
//     </>
//   )
// }