import React from "react";
import { PRODUCTS } from "../../components/products";
import  Product from "../shop/product";
import style from "../../style/shop.module.css";
import Footer from "../../components/Footer";

export const Shop = () => {
  return (<>
    <div className={style.shop}>
      <div className={style.shopTitle}>
        <h1>Tech Store</h1>
      </div>

      <div className={style.products}>
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    <div className=""></div>
        <Footer></Footer>
    </>
  );
};
export default Shop;