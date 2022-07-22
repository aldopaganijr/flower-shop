import "./CartDropDown.scss"
import Button from "../button/Button"
import CartItem from "../cart-item/CartItem"
import { useContext } from "react"
import {CartContext} from "../../contexts/cart"
import { useNavigate } from "react-router-dom"


const CartDropDown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/Checkout')
  }

  return (
    <div className="cart-dropdown-container">
        <div className="cart-items">
         {cartItems.map((item) => (
          <CartItem key={item.id} CartItem={item} />
          ))}
        </div>
        <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </div>
  )
}

export default CartDropDown