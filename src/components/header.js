import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutInitiate } from "../redux/actions";

function Header() {
  const { user } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  const handleAuth = () => {
    if (user) {
      dispatch(logOutInitiate());
    }
  };
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img
            className="header__logo"
            src="https://s3.amazonaws.com/fjds/gig_company/original/20/freelancer-logo.png?1587072521"
            alt="logo"
          />
        </Link>
        <h4>How It Works</h4>
        <h4>Browse Jobs</h4>
      </div>

      <div className="header__right">
        <h4>
          <Link to={`${user ? "/" : "/login"}`} className="header-link">
            <div onClick={handleAuth} className="header-option">
              <span className="header-option1">
                Hello, {user ? user.email : "Guest "}{" "}
              </span>
              <span className="header-option2">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
        </h4>
        <h4>
          <Link to="/signup">Sign Up </Link>
        </h4>
        <button><Link to="/projectList">Post a project</Link></button>
      </div>
    </div>
  );
}

export default Header;
