import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import style from "../../style/cart.module.css"

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className={style.cartItem}>
      <img src={productImage} />
    <div className={style.description}>
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
          <div className={style.countHandler}>
        <button onClick={() => removeFromCart(id)} className={style.btn3}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)} className={style.btn4}> + </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
