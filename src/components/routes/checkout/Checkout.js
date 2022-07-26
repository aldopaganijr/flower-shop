import React from 'react'
import "./Checkout.scss"
import { useContext } from 'react'
import {CartContext} from "../../../contexts/cart"
import CheckoutItem from '../../checkout-item/CheckoutItem'
import { motion } from "framer-motion"
import {pageAnimation} from "../../../animation";

const Checkout = () => {

    const {cartItems, cartTotal} = useContext(CartContext)

  return (
    <div className='checkout-screen-container'>
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" className='checkout-container'>
            <div className='checkout-header'> 
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
                {cartItems.map((cartItem) => (
                <CheckoutItem cartItem={cartItem} key={cartItem.id} />
                ))}
                <span className='total'>Total: ${cartTotal}</span>
        </motion.div>
    </div>

  )
}

export default Checkout