// // import React, { useState } from "react";
// // import Comp1 from "./Comp1";
// // import Comp2 from "./Comp2";
// // import Comp3 from "./Comp3";
// // import Comp4 from "./Comp4";
// // const App = () => {
// //   const [input, setInput] = useState("");
// //   const [data, setData] = useState([]);

// //   // const handleChange = (event) => {
// //   //   setInput(event.target.value);
// //   // };

// //   const handleClick = () => {
// //     setData([
// //       ...data,
// //       {
// //         itemName: input,
// //         time: new Date().getDay(),
// //       },
// //     ]);
// //     setInput('')
// //   };

// //   const handleDelete = (value) => {
// //     setData(data.filter((item) => item !== value));
    
// //   };

// //   // console.log(typeof new Date());
// //   return (
// //     <div className="flex">
// //       <Comp1 setInput1={setInput} input={input}/>
// //       <Comp2 handleClick={handleClick}/>
// //       <Comp3 x={data}/>
// //       <Comp4   data={data} handleayan={handleDelete}/>

      
      

      

    
// //     </div>
// //   );
// // };

// // export default App;

// // // Array.map()
// // import React from 'react'

// // const Login = () => {
// //   return (
// //     <div className='h-[100vh] bg-blue-300 w-[100%]  p-[20vh] pl-[75vh]'>
// //     <div className='h-[60vh] w-[70vh] bg-green-200 rounded-lg border-2 border-black '>
        
// //     <h1 className='pl-[29vh] font-semibold pt-20  text-[20px]'>login</h1><br/>
// // <div>
// //     <label className='pr-2 pl-4'> Username</label>
// //     <input className='w-[50vh] rounded-lg border-2 border-black ' placeholder='Username or email Id'></input>
// //     </div>
// //     <div className='mt-10'>
// //     <label className='pr-[12px] pl-4'>Password</label>
// //     <input className='w-[50vh] rounded-lg border-2 border-black ' placeholder='Enter Password '></input>
// //     </div>
// //     <div className='pt-10 pl-[29vh]'>
// //       <div className='flex justify-between pr-2'>
// //     <button className='  border-2 border-black rounded-lg p-1 px-2  text-white bg-black' >Login</button> 
    
// //     <button className='  border-2 border-black rounded-lg p-1 px-2 text-white bg-black' >forget Password</button>
// //     </div>

    
// //     </div>
// //     </div>
// //     </div>
// //   )
// // }

// // export default Login
// import React, { useEffect, useState } from 'react'

// import { BiSearch } from "react-icons/bi";
// import App from '../App.css'

// const Login = () => {
  
//   const [data, setData] = useState( '')
//   const [input, setInput] = useState( '')
//   useEffect(() => {
//     console.log("ayan")
//  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=bad21f6255826f410eaecf26c0e89ddf`)
//  .then((res) => res.json())
//   .then((json) => setData(json));  
//    } ,[input])
//    console.log(data)
  

// const tempFormatChange = (num) =>{
//   let temp = num/10;
//   return temp
// }

// const handlechange=(e)=>{
//   setInput(e.target.value)
 
// }

//   return (
//     <div className=' background h-[80vh] ml-[55vh]  rounded-3xl w-[90vh] p-10'>
//       <div className='flex justify-center w-[60vh] ml-[11vh] bg-white rounded-xl mb-10'>
//       <input className='  rounded-2xl border w-[50vh] border-3-bg-black' value={input} onChange={(e)=>{handlechange(e)}} placeholder='ENTER OUR CITY'></input> 
//       <BiSearch className='rounded-full border-2 border-black m-2 text-2xl bg-white h-[5vh] text-black w-[5vh] p-1'/>
//       </div>

//        <span className='text-white flex justify-center text-2xl'> {tempFormatChange(data?.main?.temp)} °C</span>
//        <h2 className='text-white flex justify-center text-2xl'>{tempFormatChange(data?.coord?.lon)}</h2> 
    
//     </div>
//   )
// }

// export default Login
import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login