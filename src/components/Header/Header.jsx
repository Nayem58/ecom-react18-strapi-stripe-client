import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";

import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const windowOffset = window.scrollY;
    windowOffset > 200 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "main-header sticky-header" : "main-header"}>
      <div className="header-content">
        <ul className="left">
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className="center">FreeStore</div>
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span className="cart-icon">
            <CgShoppingCart />
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
