import React from 'react'
import { AiFillStar, AiTwotoneHeart } from 'react-icons/ai'
import { BsCurrencyRupee } from 'react-icons/bs'
import {useDispatch, useSelector } from 'react-redux'
import { removeCartData } from '../Redux/slices/cartSlice'


const Cart = () => {
  const cart = useSelector((state)=>{
    return state.cartInfo.cartData
  })
  const dispatch= useDispatch()
    
    return (
        <div className="grid grid-cols-12 m-2"> 
            {
              cart.map((i,idx)=>{
                return(
                  <div className="m-2 h-[50vh] w-[40vh] col-span-3 p-3 hover:shadow-2xl hover:shadow-grey-500">
                <AiTwotoneHeart className="text-[#c8c8c8]"/>
                <img className="h-[25vh] w-[100%] pb-3" alt="" src={i.image}></img>
                <span className="text-sm hover:text-blue-600 "> {i.title} </span><br></br>
                <div className="flex items-center"> 
                    <BsCurrencyRupee/>
                   <span className="text-sm font-bold">{i.price}</span><br></br>
                </div>
                <div className="flex items-center my-2">
                  {/* <div className="flex items-center rounded bg-[#388e3c] w-[8vh]"> <span className="px-1 text-white text-sm ">{i.rating.rate} </span>
                    <AiFillStar className="text-white text-sm"/>
                  </div> */}
                  {/* <span className="text-sm text-[#93878b]">({i.rating.count})</span> */}
               </div>
               <button className="text-sm ml-12 border-2 rounded-lg p-1 bg-red-100 border-black"onClick={()=>{dispatch(removeCartData(idx))}} >Remove</button>
              </div>
                )
              }
              )
            }
            
          </div>
    
      )
}

export default Cart