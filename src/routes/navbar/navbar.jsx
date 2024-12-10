import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navbar.styles.scss";
import { UserContext } from "../../contexts/user-context";
import { userSignOut } from "../../util/firebase/firebase";
import {Carticon} from "../../components/cart/cart-icon/cart-icon";
import { Cartdropdown } from "../../components/cart/cart-dropdown/cart-dropdown";
import { CartContext } from "../../contexts/cart-product";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isDropdown  } = useContext(CartContext);
  

  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" onClick={userSignOut}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/authentication">
              SIGN IN
            </Link>
          )}
           <Carticon   />
           {isDropdown ?  <Cartdropdown/> : ''}
        </div>
       
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
