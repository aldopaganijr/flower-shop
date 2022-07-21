import React from 'react'
import "./ProductCard.scss"
import Button from "../button/Button"

const ProductCard = ({product}) => {
  const {name, price, imageUrl} = product

  return (

    <div className='product-card-container'>
      <img src={imageUrl} alt="flowers" />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        <Button>Add to Cart</Button>
      </div>
    </div>
  )
}

export default ProductCard