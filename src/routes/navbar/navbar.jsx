import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navbar.styles.scss";
import { UserContext } from "../../contexts/user-context";
import { userSignOut } from "../../util/firebase/firebase";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);


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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
