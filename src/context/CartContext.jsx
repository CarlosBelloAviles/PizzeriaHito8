import React, { createContext, useState, useContext } from "react";
import { UserContext } from "./UserContext";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const {token} = useContext(UserContext)
  

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

 

  const simulacro = async () => {
    const response = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cart: {cart},
      }),
    });
    let data = await response.json();
    alert(data?.error || data.message);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        incrementar,
        decrementar,
        removerPizza,
        getTotal,
        setCart,
        simulacro
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
