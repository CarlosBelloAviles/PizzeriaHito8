import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardPizza from "../components/CardPizza";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = `http://localhost:5000/api/pizzas/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data);
  };

  if (pizza === null) return;

  return (
    <div className="container">
      <CardPizza
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
        desc={pizza.desc}
        showMoreButton={false}
      />
    </div>
  );
};

export default Pizza;
