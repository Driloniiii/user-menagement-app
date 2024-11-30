import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import style from "../style/navbar.module.css";
import logo from "../assets/products/logoo.png"

export const Navbar = () => {
  return (
    <>
    <div className={style.navbar}>
      <div className={style.logo}>
      <img src={logo} alt="" srcset="" />
      </div>
      <div className={style.links}>
        <Link to="/"> Store </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
    </>

  );
};
export default Navbar