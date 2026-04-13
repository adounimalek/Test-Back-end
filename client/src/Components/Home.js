import React, { useState } from 'react'
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Addproduct from './Addproduct';

function Home({ ping, setping }) {
  const products = useSelector((state) => state.Product.productlist);
  const [category, setcategory] = useState("all");
  const [text, settext]=useState("false");

  return (
    <>
    <Addproduct ping={ping} setping={setping} />
    <input type="text" onChange={(e)=>settext(e.target.value)}/>
      <button onClick={() => setcategory("Male")}>Male</button>
      <button onClick={() => setcategory("Female")}>Female</button>

      <div className='parent'>
        {category == "all"
          ? products?.map((el) => (
              <ProductCard
                key={el._id}
                el={el}
                ping={ping}
                setping={setping}
              />
            ))
          : products
              ?.filter((el) => el.category == category && el.name.includes(text) )
              .map((el) => (
                <ProductCard
                  key={el._id}
                  el={el}
                  ping={ping}
                  setping={setping}
                />
              ))
        }
      </div>
    </>
  );
}

export default Home;