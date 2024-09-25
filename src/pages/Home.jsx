import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useCart } from "../context/CartContext";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { agregarPizza } = useCart();
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };

  return (
    <>
      <Header />
      
        <main className="pizzas">
          {pizzas.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                desc={pizza.desc}
                onAddToCart={() => agregarPizza(pizza)}
              />
            </div>
          ))}
        </main>
     
    </>
  );
};

export default Home;
