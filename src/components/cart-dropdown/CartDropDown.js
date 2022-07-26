import "./CartDropDown.scss"
import Button from "../button/Button"
import CartItem from "../cart-item/CartItem"
import { useContext } from "react"
import {CartContext} from "../../contexts/cart"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {titleAnim} from "../../animation";


const CartDropDown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/Checkout')
  }

  return (
    <motion.div exit="exit" variants={titleAnim} initial="hidden" animate="show" className="cart-dropdown-container">
        <div className="cart-items">
         {cartItems.map((item) => (
          <CartItem key={item.id} CartItem={item} />
          ))}
        </div>
        <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </motion.div>
  )
}

export default CartDropDown