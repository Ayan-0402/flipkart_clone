import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nevbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Product from "./Components/Product";
import Cart from './Components/Cart'
import "./App.css";
import {useDispatch,useSelector} from "react-redux"
import {fetchStore, updateDataState}from "./Redux/slices/cartSlice"

const App = () => {
  const data = useSelector((state=>{
    return state.cartInfo.stateManager
  }))

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchStore())
  },[])
  console.log(data)

  const medicine = [
    {
      name: 'paracetemol',
      price: '10rs',
      offer: '60% Off',
      rating: 4.8,
      
    }
  ]

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about"element={<About />}></Route>
          <Route path="/login"element={<Login />}></Route>
          <Route path="/Product" element={<Product data={data} />}></Route>
          <Route path="/Cart"element={ <Cart />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;