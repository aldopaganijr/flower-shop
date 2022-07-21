import "./CartDropDown.scss"
import Button from "../button/Button"

import React from 'react'

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
        <div className="cart-items" />
        <Button>Go To Checkout</Button>
    </div>
  )
}

export default CartDropDown