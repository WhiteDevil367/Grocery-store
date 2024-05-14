import './Products.css'

import { createContext } from 'react'

export const context = createContext()

const Products = ({id, rating, title, price, images, brand, category}) => {

    
    return(
        <>
          <div className="product-card" id={id}>
            <img className="product-image" src={images[0]} alt={title}/>
            <div className='product-details'>
                <h1>{title}</h1>
                <p>{`${brand} ${category}`}</p>
                <div className='price-rating'>
                   <h4>${price}</h4>
                   <h5>{rating}</h5>
                </div>
                <button className='btn btn-primary'>Add to Cart</button>
            </div>
          </div>
          
        </>
    )
}

export default Products