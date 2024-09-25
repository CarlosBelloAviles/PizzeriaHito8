import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CardPizza = ({
  id,
  img,
  name,
  ingredients,
  price,
  desc,
  showMoreButton = true,
}) => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const añadirAlCarrito = () => {
    const pizzaExistente = cart.find((pizza) => pizza.id === id);

    if (pizzaExistente) {
      setCart(
        cart.map((pizza) =>
          pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
        )
      );
    } else {
      setCart([...cart, { id, name, price, img, quantity: 1 }]);
    }
  };

  const PizzaDetalle = () => {
    navigate(`/pizza/${id}`);
  };

  return (
    <div className="cardPizza">
      <img src={img} className="pizzaImg"></img>
      <h3 className="tittleCard">Pizza {name}</h3>
      <div>
        <hr />
        <h4>Ingredientes: </h4>
        <ul style={{ display: "flex", gap: 6 }}>
          {ingredients.map((ingrediente, index) => (
            <li style={{ listStyleType: "none" }} key={index}>
              🍕{ingrediente}
            </li>
          ))}
        </ul>
        <hr />
        <p className="precio">
          Precio: <span>$ {price.toLocaleString()}</span>
        </p>
        <hr />
      </div>
      <div className="botones">
      {showMoreButton && (
       <button onClick={PizzaDetalle} className="link"> Ver Más 👀</button>
        
      )}
        <button
      
          onClick={añadirAlCarrito}
          className="añadir"
        >
          Añadir 🛒
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
