import "./Navigation.scss";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../contexts/user";
import { signOutUser } from "../../../utils/firebase/firebase";



const Navigation = () => {

  const {currentUser, setCurrentUser} = useContext(UserContext)
  
  const signOutHandler =  async () => {
    await signOutUser();
    setCurrentUser(null);
  }

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
                  <span className="link" onClick={signOutHandler}>Sign Out</span>
                ) : (
              <Link className="link" to="/Authentication">
                  Sign In
              </Link>
               )}

            </div>
        </div>
        <Outlet/>
    </Fragment>
  )
}

export default Navigation