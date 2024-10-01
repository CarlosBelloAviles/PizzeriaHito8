import React from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const {
    cart,
    incrementar,
    decrementar,
    simulacro,
    removerPizza,
    getTotal,
    
  } = useCart();
  const { token } = useUser();

  return (
    <div
      className="container my-5, bg-dark"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((pizza) => (
            <div
              key={pizza.id}
              className="card mb-3"
              style={{ maxWidth: "650px" }}
            >
              <div
                className="row g-0. bg-success"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="col-md-4" style={{ width: "340px" }}>
                  <img
                    src={pizza.img}
                    className="img-fluid rounded-start"
                    style={{ width: "340px", height: "200px" }}
                    alt={pizza.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{pizza.name}</h5>
                    <p className="card-text" style={{ color: "black" }}>
                      Precio: ${pizza.price}
                    </p>
                    <p className="card-text" style={{ color: "black" }}>
                      Cantidad: {pizza.quantity}
                    </p>
                    <button
                      className="btn btn-secondary me-2"
                      onClick={() => incrementar(pizza.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-secondary me-2"
                      onClick={() => decrementar(pizza.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => removerPizza(pizza.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: ${getTotal()}</h3>

          <button
            style={{ color: "white", background: "#1b995e" }}
            variant="primary"
            onClick={() => simulacro()}
            disabled={token ? false : true}
          >
            Pagar
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
