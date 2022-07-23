import "./Navigation.scss";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../cart-icon/cartIcon";
import { useContext } from "react";
import { UserContext } from "../../../contexts/user";
import { signOutUser } from "../../../utils/firebase/firebase";
import CartDropDown from "../../cart-dropdown/CartDropDown";
import { CartContext } from "../../../contexts/cart";




const Navigation = () => {

  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
  


  return (
    <Fragment>
        <div className="navigation">
            <Link id="logo" className="logo-container" to="/">
              The Grow Room 
            </Link>
            <div className="links-container">
              <Link className="link" to="/About">
                  About
              </Link>
              <Link className="link" to="/Shop">
                  Shop
              </Link>
              {currentUser ? (
                  <span className="link" onClick={signOutUser}>Sign Out</span>
                ) : (
              <Link className="link" to="/Authentication">
                  Sign In
              </Link>
               )}
              <CartIcon />
            </div>
            { isCartOpen && <CartDropDown />}
        </div>
        <Outlet/>
    </Fragment>
  )
}

export default Navigation