import React, { createContext, useState, useContext } from "react";
import { pizzaCart } from "../utils/pizzas";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const incrementar = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };

  const decrementar = (id) => {
    setCart(
      cart
        .map((pizza) => {
          if (pizza.id === id) {
            if (pizza.quantity > 1) {
              return { ...pizza, quantity: pizza.quantity - 1 };
            } else {
              return null;
            }
          }
          return pizza;
        })
        .filter((pizza) => pizza !== null)
    );
  };

  const removerPizza = (id) => {
    setCart(cart.filter((pizza) => pizza.id !== id));
  };

  const getTotal = () => {
    return cart.reduce(
      (total, pizza) => total + pizza.price * pizza.quantity,
      0
    );
  };

  const pagar = () => {
    alert("Sin funcionamiento por ahora");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        incrementar,
        decrementar,
        removerPizza,
        getTotal,
        pagar,
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
