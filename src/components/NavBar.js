import React from "react";
import Link from "next/link";
import { aiOutlineshopping } from "react-icons/ai";
import { Cart } from ".";
// import { useStateContext } from "../context/StateContext";

const NavBar = () => {
  // const { showcart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <div className="company-name">
        <Link href="/">Mangez Macaron</Link>
        <div className="navbar" logo={true}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>

          {/* <button type="button" className="cart-icon" onClick={()=> setShowcart(true)}>
                <AiOutlineShoppingCart />
                <span className="cart-item-qty">{totalQuantities}</span>
                </button>
                {showcart && <Cart />} 
                
                */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
