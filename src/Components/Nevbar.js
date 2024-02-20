import React from "react";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";



const Navbar = () => {
  const cart =useSelector((state)=>{
    return state.cartInfo.cartData
  }
  )
  return (
    <div className="h-[10vh] bg-[#62a02b] ">
      
      <div className="flex flex-row-reverse bg-black-300 h-full items-center">
      
        <div className="flex gap-8">
          <Link
            className="border px-8 py-2 rounded border-black-700 hover:bg-[#da4d00] hover:text-white"
            to="/"
          >
            Home
          </Link>
          <Link     className="border px-8 py-2 rounded border-black-700 hover:bg-[#da4d00] hover:text-white"
            to="/about">
            About</Link>

          <Link    className="border px-8 py-2 rounded border-black-700 hover:bg-[#da4d00] hover:text-white"
            to="/login">login</Link> 

          <Link    className="border px-8 py-2 rounded border-black-700 hover:bg-[#da4d00] hover:text-white"
            to="/Product">Product</Link>
            
            <Link    className="border px-8 py-2 rounded border-black-700 hover:bg-[#da4d00] hover:text-white"
            to="/Cart">Cart</Link>  
            
            <span className="mr-10 mt-1 p-1 rounded-md border border-black hover:bg-[#da4d00] hover:text-white">Cart: {cart.length} </span>
             {/* <Link    className="border px-8 py-2 rounded border-black-700 hover:bg-[#da4d00] hover:text-white"
            to="/cart1">cart1</Link>  */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;