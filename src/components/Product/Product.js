import React from 'react';
import "./Product.css" ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faShoppingCart} />
const Product = (props) => {
const {product , handleAddToCart , cart} = props;
const { category , name , seller , price , ratings ,img} = product ;
    return (
        <div className='product'>
           <img src={img} alt="product"/>
          <div className="product-info">
          <p className='productName'>{name}</p>
           <p>Price : $ {price} </p>
           <p> <small>Seller : {seller} </small></p>
           <p><small>Ratings : {ratings}</small></p>
           <p> <small>Category : {category} </small></p>
          </div>
          <button className='cart-button' onClick={() => (handleAddToCart(product))} 
          disabled={cart.length === 12 }>
            <p className='cart-text'>Add to cart </p> 
            <p className='cartImage'> {element} </p>
          </button>
        </div> 
    );
};

export default Product;