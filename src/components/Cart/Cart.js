import React from 'react';
import "./Cart.css" ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    const {cart} = props ;
    let shippingPrice = 0 ;
    let total = 0 ;
    let totalQuantity = 0 ;
    for(const product of cart) {
        totalQuantity = totalQuantity + product.quantity ;
        total = total + product.price  * product.quantity;
        shippingPrice = shippingPrice + product.shipping ;
    }
    let tax =( total * 10/100 ) ;

    let totalFinalAmount = shippingPrice + total + tax ;
    //clear data 
    const clearData = () => {

        localStorage.clear() ;
         alert("Your all shopping cart info is deleted !! ") ;

         window.location.reload(false);
    }
   
    return (
        <div className='cart-balance'>
         <p> Product summery  </p>
             <hr />
             <p>Selected Items: {totalQuantity} </p>
             <p>Total Price: ${total} </p>
             <p>Total Shipping Charge: ${shippingPrice}</p>
             <p>  Tax: ${parseFloat(tax).toFixed(2)} </p>
             <p>Grand Total: ${parseFloat(totalFinalAmount).toFixed(2)}</p>
             <br /><br />
             <button className='clearData' onClick={() => (clearData())}>
                <span style={{margin:"0 10px"}}> Clear data </span>
             <FontAwesomeIcon icon={faTrash}/> </button>
             <br /><br />
             <button className='reviewProduct'>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
           <span style={{margin:"0 10px"}}> Review product  </span>
  </button>
        </div>
    );
};

export default Cart;