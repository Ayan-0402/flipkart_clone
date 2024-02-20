// import React from 'react'
// import { TbSquareLetterL } from "react-icons/tb";
// import { MdOutlineSpaceDashboard ,MdKeyboardArrowDown} from "react-icons/md";
// import { AiOutlineFolder } from "react-icons/ai";
// import { BiBookAlt } from "react-icons/bi";
// import { AiOutlineCalendar,AiOutlineSearch } from "react-icons/ai";
// import { BsChatLeft } from "react-icons/bs";
// import {  FaRegEdit,FaLongArrowAltRight } from "react-icons/fa";
// import ProgressBar from "@ramonak/react-progress-bar";

// const Home = () => {
//   const sideBar= [
//     {icon:<MdOutlineSpaceDashboard/>,
//     text:'Dashboard'},
//     {icon:<AiOutlineFolder/>,
//     text:'Classes'},
//     {icon:<BiBookAlt/>,
//     text:'Resources'},
//     {icon:<AiOutlineCalendar/>,
//     text:'Learing plan'},
//     {icon:<BsChatLeft/>,
//     text:'Chat'},
//     {icon:<FaRegEdit/>,
//     text:'settings'},
//   ]
//   const progressBar=[{
//     Name:"Unit-5-",
//     Subject:"Technology",
//     Progress:<ProgressBar/>,
//     percent: 10,
//   },{
//     Name:"Unit-6-",
//     Subject:"Ecology",
//     Progress:<ProgressBar/>,
//     percent: 20,
//   },
//   {Name:"Unit-7-",
//   Subject:"Real estate",
//   Progress:<ProgressBar/>,
//   percent: 30,
//   },{
//     Name:"Unit-8-",
//     Subject:"Education",
//     Progress:<ProgressBar/>,
//     percent: 40,
//   },{
    
//       Name:"Unit-8-",
//       Subject:"Job market",
//       Progress:<ProgressBar/>,
//       percent: 40,
    
//   }

//   ]
//   const days=[{
//   day:"Mon",
//   percent:25
// },
// {
//   day:"Tue",
//   percent:55
// },
// {
//   day:"Thru",
//   percent:45
// },
// {
//   day:"Fri",
//   percent:65
// },
// {
//   day:"sat",
//   percent:25
// },
// {
//   day:"Sun",
//   percent:15
// }] 
  
//   return (
//     <div>
//       <div className='grid grid-cols-12 h-[100vh] ' > 
//       <div className='col-span-2 hover:'>
//         <div className='flex items-center p-7 justify-around'>
//           <TbSquareLetterL className='text-[4vh] ' color='blue'/> 
//           <span className='text-[4vh] font-semibold'>Linglee</span>
//           </div>
//           <div>
//           {sideBar.map((e)=>{
//             return(
//               <div className='flex p-3 hover:bg-green-500 '> 
//                 <span className='mx-10'>{e.icon}</span>
//                 {e.text}
//               </div>
//             )

//           })}
//           </div>
//           <div className='h-[300px] pt-10 ' > 
//               <div className='bg-[#f6f6fb] rounded-2xl flex flex-col  items-center mt-10 mx-4 px-5 '>
//                 <img className='w-[10vh] bottom-8 relative  ' src='https://cdn-icons-png.flaticon.com/512/4447/4447248.png' alt=''></img>
//                 <span className='text-xs'>Upated to <b>PRO</b> for <br></br> more resources</span>
//                 <button className='bg-[#5e80f3] text-xs text-white rounded-lg my-5 mx-4 py-2 px-4'>Upgrade</button>
//               </div>
//             </div>

        
//       </div>
//       <div className='col-span-7 bg-[#f5f5fb] p-8 '>
//         <div className="dashboard flex justify-between ">
//           <div className='font-bold'> DashBoard</div>
//           <div className='flex items-center'>
//           <div className='pr-3'>20 sep 2019,Friday</div>
//           <div className='bg-[skyblue] text-[3vh] rounded-lg p-1'><AiOutlineSearch/></div>
//           </div>
//         </div>
//         <div className='bg-[#d9d0cb] h-[20vh] my-10 rounded-xl p-8  flex justify-between'>
//           <div className=''>
//             <span className='text-[#fd6f7b] py-4'><b>Welcome back Anna</b></span><br></br>
//             <br></br>

//             <span className='text-[12px]'>you've learned 80% of your goal this week!</span><br></br>
//             <span className='text-[12px]'>keep it up and improve your results !</span><br></br>
//           </div>
//           <div>
//           <img className='w-[18vh] bottom-16 h[10vh] relative ' alt='' src='https://cdn.icon-icons.com/icons2/3078/PNG/512/student_work_office_desk_work_space_computer_working_support_icon_191191.png'></img>
//           </div>
//         </div>


//        <div>
//         <div className='grid grid-cols-12'>
//             <div className='col-span-5'>
//               <div className=' bg-[#fdfdfe] mr-3 h-[50vh] rounded-xl '> 
//               <div className='flex  text-xs py-3'>
//                   <div className='pl-4' >Latest Result </div>                   

//                   <div className='flex items-center'>
//                      <div className=' ml-[170px]'>More</div>
//                      <div className='ml-2'> <FaLongArrowAltRight /></div>
//                   </div>
//              </div>
//              <div>
//              {progressBar.map((e) => {
//                     return (
//                     <div className="flex justify-between text-[10px] p-2 mx-3 border-b border-[rgb(220,224,231)]">
//                   <div className="flex items-center font-semibold ">
//                   <span className="flex p-2 ">{e.Name}</span>
//                   <span className="text-[#c9cfde]">{e.Subject}</span>
//                   </div>
//                   <div className="flex items-center p-2">
//                   <div className="p-2">
//                   <ProgressBar completed={e.percent} height="4px" width="70px" labelClassName="label"/>
//                   </div>
//                   <span className="text-[#6485f4] font-semibold">{e.percent}{"%"}</span>
//                   </div>
                  
                  
//                 </div>
                
//               );
//             })}
//              </div>
           
        
//               </div>
//             </div>
//             <div className='col-span-7  ' >
//               <div className='bg-[#fdfdfe] ml-3 h-[50vh] rounded-xl p-5  pt-1'>
                
//                 <div className='flex justify-between '>
//                 <div>Time spent on Learing</div>
//                 <div>
//                 <div className=' pr-2'>Last Week</div>
//                 <div className='flex pt-1'><MdKeyboardArrowDown/></div>
//                 </div>
            
//                 </div>

//                 <div className="flex   ml-5">
//                 {
//                   days.map((e)=>{
//                     return(
            
//                       <div className="p-7" >
//                         <span className="text-[10px] text-[#c9cfde]">{e.day}</span>
//                         <div  class="flex flex-col flex-nowrap justify-end w-1 h-40 bg-[#ff8d97] rounded-full overflow-hidden" >
//                           <div  class="bg-blue-500 overflow-hidden"  role="progressbar" style={{height:e.percent}} ></div></div> 

//                       </div>
                      
//                     )
//                   })
//                 }</div> 
               
//               </div>
//             </div>
         
//         </div>
//        </div>
//        <div className='flex justify-between'>
              
//               <div>Your courses</div>
//               <div className='flex items-center'>
//               <div>More</div>
//               <div><FaLongArrowAltRight /></div>
//               </div>

//             </div>
//             <div>
//             <div className='flex justify-between items-center'>
//               <div className='bg-[#4d4cac] h-[10vh] w-[30vh] rounded-xl flex justify-between items-center text-white p-2'>
//                 <div className='rounded-xl p-2 bg-[#5d5db4] text-[12px] '>B2</div>
//                 <div>
//                   <span className='text-[10px]'>Business English</span><br></br>
//                   <span className='font-bold text-[12px]'>Grammar</span>
//                 </div>
//                 <div> <FaLongArrowAltRight /></div>
//               </div>
//               <div className='bg-[#9698d6] h-[10vh] w-[30vh] rounded-xl flex justify-between items-center text-white p-2'>
//                 <div className='rounded-xl p-2 bg-[#a7aede] text-[12px] '>B2</div>
//                 <div>
//                   <span className='text-[10px]'>Common English</span><br></br>
//                   <span className='font-bold text-[12px]'>Phrasal Verbs</span>
//                 </div>
//                 <div> <FaLongArrowAltRight /></div>
//               </div>
//                <div className='bg-[#ff828d] h-[10vh] w-[30vh] rounded-xl flex justify-between items-center text-white p-2'>
//                 <div className='rounded-xl p-2 bg-[#f29ca4] text-[12px] '>C1</div>
//                 <div>
//                   <span className='text-[10px]'>Business Spanish</span><br></br>
//                   <span className='font-bold text-[12px]'>Vocabulary</span>
//                 </div>
//                 <div> <FaLongArrowAltRight /></div>
//               </div>
//             </div>
//             </div>

//       </div>
//       <div className='col-span-3 bg-yellow-500'></div>
//       </div>

//     </div>  
//   )
// }

// export default Home

import React ,{useState}from 'react'
import '../App.css'
const Home = () => {
  const [calculte, setCalculte] = useState('')
  const [soluation, setSoluation] = useState(0)

  const handlePerfromCalculate =()=>{
    let result = eval ((calculte))
    setSoluation(result);
  }
const handleclick=(data)=>{
  setCalculte(calculte.concat(data))

}
console.log("ayan")

  return (
    <div className='bg-white'>
        <div className='h-[90vh] w-[80vh] bg-[#ffcec7] ml-[55vh] rounded-3xl  p-16  '>
          <div className='h-[75vh]  w-[50vh] bg-white rounded-2xl ml-14 p-[2vh] '>
            <div className='h-[15vh] w-[100%] bg-white  border-b border-black'>
              <div className='text-6xl text-[#f3b8bb]'>{soluation}</div>
              <div className='pt-4'>{calculte} </div>
            </div>
            <div className='grid grid-cols-12   p-1 rounded-sm'>
              <button className='button grid col-span-3 'onClick={()=>{handleclick('c')}}>c</button>
              <button className='button grid col-span-3'onClick={()=>{handleclick('+/-')}}>+/-</button>
              <button className='button grid col-span-3 'onClick={()=>{handleclick('%')}}>%</button>
              <button className='button grid col-span-3 'onClick={()=>{handleclick('/')}}>/</button>

            </div>
            <div className='grid grid-cols-12 '>
            <button className='button grid col-span-3 'onClick={()=>{handleclick('7')}}>7</button>
              <button className='button grid col-span-3'onClick={()=>{handleclick('8')}}>8</button>
              <button className='button grid col-span-3 'onClick={()=>{handleclick('9')}}>9</button>
              <button className='button grid col-span-3 'onClick={()=>{handleclick('*')}}>x</button>

            </div>
            <div className='grid grid-cols-12 '>
            <button className='button grid col-span-3 'onClick={()=>{handleclick('4')}}>4</button>
              <button className='button grid col-span-3'onClick={()=>{handleclick('5')}}>5</button>
              <button className='button grid col-span-3 'onClick={()=>{handleclick('6')}}>6</button>
              <button className='button grid col-span-3 'onClick={()=>{handleclick('-')}}>-</button>

            </div>
            <div className='grid grid-cols-12  '>
              <button className='button grid col-span-3 'onClick={()=>{handleclick('1')}}>1</button>
              <button className='button grid col-span-3'onClick={()=>{handleclick('2')}}>2</button>
              <button className='button grid col-span-3 'onClick={()=>{handleclick('3')}}>3</button>
              <button className='button grid col-span-3 'onClick={()=>{handleclick('+')}}>+</button>


            </div>
            <div className='grid grid-cols-12  '>
            <button className='button grid col-span-3 'onClick={()=>{handleclick('0')}}>0</button>
              <button className='button grid col-span-3'onClick={()=>{handlePerfromCalculate()}}>=</button>
              <button className='button grid col-span-3 'onClick={()=>{handleclick('%')}}></button>
              <button className='button grid col-span-3 'onClick={()=>{handleclick('/')}}>/</button>

             </div>
          </div>

      </div>
      </div> 
  )
}

export default Home