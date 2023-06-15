import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../../store/Store";
import style from "./CartCard.module.css";
const CartCard = () => {
  const [cartItems, setCartItems] = useState([]);

  const Ctx = useContext(Context)

  useEffect(function () {
    (async function () {
      const response = await axios.get(
        "http://localhost:3000/data/Products.json"
      );

      const data = response.data;


      const cart = [];


      Ctx.products.forEach((cartitem,index)=>{
            data?.forEach(product=>{
                if(product.id === cartitem.id){
                    cart.push({
                        id:product.id,
                        title : product.product_name,
                        quantity : cartitem.quantity,
                        price:cartitem.price
                    })
                }
            })
      })

     setCartItems(cart)
      

   
    })();
  },[]);
  return <div className={style["cart_wrapper"]}>
    {cartItems.map(cart=>{
        return (
        <div key={cart.id} className={style["cart_card"]}>
            <h2>{cart.title}</h2>
            <hr className={style["hr"]}/>

            <div className={style["product_price"]}>
                <p>Quantity : {cart.quantity}</p>
                <p>Price : {cart.price}</p>
            </div>
        </div>
        )
    })}
  </div>;
};

export default CartCard;
