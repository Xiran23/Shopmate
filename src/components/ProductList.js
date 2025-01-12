import React, { useCallback, useEffect, useState } from 'react'
// import Loading from "../assets/loading.gif";

import  useFetch  from '../hooks/useFetch';

const ProductList = () => {

    // const [products , setProducts] = useState([]);
    const  [url,setUrl] = useState("http://localhost:8000/products");
    const [counter,setCounter] = useState(0);
    const {data:products , loading , error} = useFetch(url);
   

    // useEffect(()=>{
        
        // fetch(url)
        //  .then(response=>response.json())
        //  .then(data=>setProducts(data));

        
      // },[url]);

    //   const fetchProducts = useCallback(

        
    //     async()=>{
    //       const response = await fetch(url);
    //       const data = await response.json();
    //       setProducts(data);
    //     }
    //   )
      
    //   useEffect(()=>{
            
    //     fetchProducts();
    //     console.log(" ");

    // },[fetchProducts]);

  return (
    <div>
        <section>
            <button onClick={()=>setCounter(counter +1) }>{counter} HEre</button>
        <button onClick={()=>setUrl("http://localhost:8000/products")}>All</button>
        <button onClick={()=>setUrl("http://localhost:8000/products?in_stock=true")}>
            In stock
        </button>
           

        <div className="product-container">
      <h1>Product List</h1>
{loading && <p className='loading'> loading....... </p>}
{error && <p className='loading'>{error} </p>}
      <div className="product-grid">

        {products && products.map((product) => (
          <div className="card" key={product.id}>
            <p className="product-id">ID: {product.id}</p>
            <p className="product-name">{product.name}</p>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-stock">
              {product.in_stock ? (
                <span className="in-stock">In Stock</span>
              ) : (
                <span className="unavailable">Unavailable</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
        </section>
        
      
    </div>
  )
}

export default ProductList
