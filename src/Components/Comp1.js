import React from 'react'

const Comp1 = ({setInput1, input}) => {
  var =5;
   for  (let i=5;i>0;i--){
  result *= i;

  }
  console.log(result)

  return (
    <div className='h-[60vh] w-[50vh] bg-yellow-400 p-4 m-4 rounded-xl border-2 border-black'>
         <h1>TO-DO List</h1>
          <input
        type="text" value={input}
        onChange={(event) => {
          setInput1(event.target.value);
        }}
      ></input>
    </div>
  )
}

export default Comp1