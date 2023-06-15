import React, { createContext } from "react";

const initialState = {
  products:  [],
  addProduct: function (product) {},
  decreaseQuantity: function (id) {},
  increaseQuantity: function (id, max) {},
};

export const Context = createContext(initialState);

export const StoreProvider = function ({ children }) {

    const [state, setState] = React.useState(initialState);

    
  const addProduct = function (product) {
    product.quantity = 1; 
    product.amount = product.price; 
    setState((prevState) => ({
      ...prevState,
      products: [...prevState.products, product],
    }));
   
  };

  const decreaseQuantity = function (id,amount) {
    setState((prevState) => ({
      ...prevState,
      products: prevState.products.map((product) => {
        if (product.id === id) {
          product.quantity = product.quantity > 0 ? product.quantity - 1 : 0;
          product.price = parseFloat((product.quantity * amount).toFixed(2));
        }
        return product;
      }),
    }));
   
  };

  const increaseQuantity = function (id, max, amount) {
    setState((prevState) => ({
      ...prevState,
      products: prevState.products.map((product) => {
        if (product.id === id) {
          product.quantity = product.quantity < max ? product.quantity + 1 : product.quantity;
          product.price = parseFloat((product.quantity * amount).toFixed(2));
        }
        return product;
      }),
    }));
    
  };

  

  return (
    <Context.Provider
      value={{
        products:  state.products,
        addProduct,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};
