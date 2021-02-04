import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../../firebase";

const Header = () => {
  const [{ card, user }, dispatch] = useStateValue();

  const logout = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "EMPTY_CARD",
        card: [],
      });
    }
  };
  return (
    <nav className="header">
      <Link to="/" className="header__logoLink">
        <img
          className="header__logo"
          src="https://www.jing.fm/clipimg/full/81-815835_amazon-logo-png-amazon-logo-white.png"
          alt="Amazon"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={logout} className="header__option">
            <span className="header__optionLineOne">
              Hello {user && user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionCard">
            <ShoppingCartOutlinedIcon className="shoppingCard" />
            <span className="header__itemCount">{card?.length}</span>
          </div>
        </Link>
      </div>

      {/* card with numbers */}
    </nav>
  );
};

export default Header;
