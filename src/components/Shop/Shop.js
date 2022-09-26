import React, { useEffect, useState } from 'react';
import {addToDb, getStoredCart} from '../addToDb/addToDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css" ;
const Shop = () => {
const [porducts , setProducts] = useState([]) ;
const [cart , setCart] = useState([]) ;

useEffect(() => { 
fetch("products.json") 
.then(res => res.json())
.then(data => setProducts(data))
} , [])
  
useEffect(() => {
 const storeCart = getStoredCart() ;
 const savedCart = [] ;
for(let id in storeCart)   {
const addProduct = porducts.find(product => product.id === id) ;
if(addProduct) {
  const quantity = storeCart[id]
  addProduct.quantity = quantity ;
  savedCart.push(addProduct) ;
}
 }
 setCart(savedCart) ;
} ,[porducts])
const handleAddToCart = (selectedProduct) => {
     let newCart = [] ;
     const exists = cart.find(porductData => porductData.id === selectedProduct.id )
   if(!exists) {
    selectedProduct.quantity = 1 ;
    newCart = [...cart , selectedProduct]  ;
   } else{
const rest = cart.filter(productFilter => productFilter.id !== selectedProduct.id) ;
exists.quantity = exists.quantity + 1 ;
newCart = [...rest , exists] ;
   }
   
    setCart(newCart) ;
    addToDb(selectedProduct.id) ;
}

    return (
        <div className='shop-container'>
            <div className="products-conatiner">
           {
    porducts.map(product => <Product handleAddToCart={handleAddToCart} 
    product={product} cart={cart}
     key={product.id}> </Product>)
           }
            </div>
            <div className="cart-container">
          <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;