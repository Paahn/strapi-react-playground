import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const url = "http://localhost:1337/products";
    const response = await axios.get(url);
    if (response.data) {
      setProducts(response.data);
    }
  }

  useEffect(() => {
    getProducts();
  },[]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <ul>
        {products.map(product => (
          <div>
            <li key={product.id}>{product.name}</li>
            <p>{product.description}</p>
          </div>
          
        ))}
      </ul>
    </div>
  );
}

export default App;
