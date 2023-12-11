import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
const Products = () => {
  const dispatch = useDispatch();
  //   const [products, setProducts] = useState([]);
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    // const fetchProducts = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const data = await response.json();
    //   setProducts(data);
    // };
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    //store this product inside redux store
    // dispatch action with payload it will call the reducer
    dispatch(add(product));
  };
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="product" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
