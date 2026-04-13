import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import Navbarr from './Components/Navbarr';

import Home from "./Components/Home";
import Female from "./Components/Female";
import Male from "./Components/Male";
import {getproducts} from './Redux/ProductSlice';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';


function App() {
  const dispatch=useDispatch();
  const [ping , setping] =useState(false)
  useEffect(()=>{
    dispatch(getproducts())

  },[ping])
  return (
    <div className="App">
       <Navbarr/>

       <Routes>
        <Route path="/" element={<Home ping={ping} setping={setping}/>} />
        <Route path="/Female" element={<Female ping={ping} setping={setping}/>} />
        <Route path="/Male" element={<Male ping={ping} setping={setping} />} />
      </Routes>
    
    </div>
  );
}

export default App;
