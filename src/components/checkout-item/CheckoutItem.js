import "./CheckoutItem.scss"
import { useContext } from "react";
import {CartContext} from "../../contexts/cart"


const CheckoutItem = ({cartItem}) => {
   
    const {name, imageUrl, price, quantity} = cartItem;

    const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext)

    const clearItemHandler = () => clearItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemToCart(cartItem)

    return(
        <div className="checkout-item-container">
            <div className="image-container-checkout">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name-checkout">{name}</span>
            <span className="quantity-checkout">
            <div onClick={removeItemHandler} className="arrow">
                &#10094;
            </div>
            <span className="value">{quantity}</span>
            <div onClick={addItemHandler} className="arrow">
                &#10095;
            </div>
            </span>
            <span className="price-checkout">{price}</span>
            <div className="remove-button-checkout" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem