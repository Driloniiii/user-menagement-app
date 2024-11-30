import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import  PRODUCTS  from "../../components/products";
import  CartItem  from "./cart-item";
  import  {useNavigate}  from "react-router-dom";

import style from "../../style/cart.module.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className={style.cart}>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className={style.cart}>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
      <div className={style.checkout}>
          <p> Total: ${totalAmount} </p>
          <button onClick={() => navigate("/")} className={style.btn1}
          > Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
            className={style.btn2}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart