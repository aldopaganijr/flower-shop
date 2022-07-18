import "./Navigation.scss";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";



const Navigation = () => {

  return (
    <Fragment>
        <div className="navigation">
            <Link id="logo" className="logo-container" to="/">
              The Grow Room 
            </Link>
            <div className="links-container">
              <Link className="link" to="/Shop">
                  Shop
              </Link>
              <Link className="link" to="/SignIn">
                  Sign In
              </Link>
              <Link className="link" to="/Contact">
                Contact
              </Link>
            </div>
        </div>
        <Outlet/>
    </Fragment>
  )
}

export default Navigation