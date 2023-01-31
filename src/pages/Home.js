import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]);

  const state = useSelector((state) => state)

  useEffect(()=>{
    fetch("products.json")
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;
