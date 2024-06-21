"use client";
import React from "react";

type Product = {
  id: number;
  name: string;
};

const ProductList = () => {
  const [products, setProducts] = React.useState([]);

  const getProducts = async () => {
    const response = await fetch("http://localhost:3000/api/products");
    const data = await response.json();
    setProducts(data);
  };

  return (
    <div>
      <button onClick={getProducts}>Get Products</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
