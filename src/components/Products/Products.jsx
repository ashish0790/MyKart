import React, { useEffect, useState } from "react";
import style from "./Products.module.css";
import Cards from "../Cards/Cards";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    (async function () {
      const response = await axios.get(
        "http://localhost:3000/data/Products.json"
      );
      const data = response.data;

      setProducts(data);

      return () => {};
    })();
  }, []);
  return (
    <div className={style["products"]}>
      {products.map((product) => {
        return (
          <Cards
           key={product.id}
            id={product.id}
            title={product.product_name}
            description={
              product.description
            }
            quantity={product.available_quantity}
            amount={product.price}
          />
        );
      })}
    </div>
  );
};

export default Products;
