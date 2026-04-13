import React from 'react'
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function Male({ping, setping}) {
  const products = useSelector((state) => state.Product.productlist);
  return (
    <div className='parent'>
    {products?.filter((el)=>el?.category.includes("Male")).map((el) => <ProductCard el={el} ping={ping} setping={setping} />)}
  </div>
)}

export default Male