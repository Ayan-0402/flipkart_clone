
// import React from 'react'

// const Comp3 = ({x}) => {
//   return (
//     <div className='h-[60vh] w-[50vh] bg-gray-400 p-4 m-4 rounded-xl border-2 border-black'>
//           {x.map((i, idx) => {
//         return (
//           <div>
//             <h4>
//               <span>{idx + 1}.</span> {i.itemName}
//             </h4>
           
//           </div>
//         );
//       })}
//     </div>
//   )
// }

// export default Comp3
import React from 'react'

function checkTriangleType(side1,side2,side3){
  if (side1===side2 && side2 === side3) {
    return"This is a Equilateral";
  } 
  else if(side1 !==side2 && side2 !== side3 && side1 !== side3)
  {
    return "This is a scalene"
  }
  else {
    return" This is isoscalene"
    
  }
}
console.log(checkTriangleType(10,10,15))
const Comp3 = () => {
  return (
    <div>Comp3</div>
  )
}

export default Comp3