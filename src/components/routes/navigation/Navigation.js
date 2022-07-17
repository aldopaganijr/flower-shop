import "./Navigation.scss";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrownLogo} from "../../../assets/crown.svg";


const Navigation = () => {

  return (
    <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
              <CrownLogo className="logo"/>
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