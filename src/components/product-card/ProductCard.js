import React from 'react'
import "./ProductCard.scss"
import Button from "../button/Button"
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

const ProductCard = ({product}) => {
  const {name, price, imageUrl} = product
  const {addItemToCart} = useContext(CartContext);

 const addProductToCart = () => addItemToCart(product)

  return (

    <div className='product-card-container'>
      <img src={imageUrl} alt="flowers" />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        <Button onClick={addProductToCart}>Add to Cart</Button>
      </div>
    </div>
  )
}

export default ProductCard