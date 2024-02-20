// 
import React,{ useState} from 'react'

const About = () => {
  const [input, setInput] = useState(0)

  const handleClick=()=>{
    setInput(input + 1)
  }
  const handleClick1=()=>{
    setInput(input - 1 )
  }
  return (
    <div className='bg-[#a2ddf6] h-[90vh] mt-0'>
      
        <p1 className='flex justify-center  border-white text-black text-5xl'>{input}</p1>
        <br></br>
        <div className='flex justify-center mt-48'>
        <button className=' border border-black h-15 w-[20vh] bg-orange-400 rounded-lg text-2xl  hover:bg-gray-700 ' onClick={()=>{handleClick()}}>INCREMENT</button>
        <br></br>
        <button  className='ml-10 border border-black rounded-lg h-[8vh] w-[24vh] bg-orange-400 text-2xl hover:bg-gray-700' onClick={()=>{handleClick1()}}> DECREMENT</button>
      </div>

    </div>
  )
}

export default About