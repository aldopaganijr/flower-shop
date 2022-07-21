import "./Navigation.scss";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../cart-icon/cartIcon";
import { useContext } from "react";
import { UserContext } from "../../../contexts/user";
import { signOutUser } from "../../../utils/firebase/firebase";



const Navigation = () => {

  const {currentUser} = useContext(UserContext)
  


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
              <Link className="link" to="/Contact">
                Contact
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
        </div>
        <Outlet/>
    </Fragment>
  )
}

export default Navigation