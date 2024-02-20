import React from 'react'

const Comp4 = ({handleayan, data}) => {
  return (
    <div className='h-[60vh] w-[50vh] bg-green-400 p-4 m-4 rounded-xl border-2 border-black'>
          {data.map((i, idx) => {
                return (
                <div>
                    <button onClick={() => {handleayan(i)}}>  delete   </button>           
                </div>
                )
                } 
                )
            }
    </div>
  )
}

export default Comp4