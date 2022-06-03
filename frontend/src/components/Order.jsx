import React from "react";
import "./Order.css"
export const Order = () => {
  const data = [
    {
      name: "sneaker",
      price: 3435,
      tag: "footwear",
    },
    {
      name: "sandles",
      price: 313,
      tag: "footwear",
    },
    {
      name: "wallet",
      price: 313,
      tag: "dailyuse",
    },
    {
      name: "casio enticer watch",
      price: 3388,
      tag: "watch",
    },
    {
      name: "sandles",
      price: 313,
      tag: "footwear",
    },
    {
      name: "computer",
      price: 67000,
      tag: "electronics",
    },
    {
      name: "mobile",
      price: 9000,
      tag: "electronics",
    },
  ];

  return (
    <div>
      {data.map((product) => {
        return (
          <div className="product-detail" key={product.name + " " + product.price + Math.random()}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <span>{product.tag}</span>
            
          </div>
        );
      })}
    </div>
  );
};

// https://api.razorpay.com/v1