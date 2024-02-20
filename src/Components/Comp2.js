// 
// import React, {useReducer} from 'react'
//  const initialState ={ count:0};

//   function reducer(state, action){
//     switch (action.type){
//       case "increment":
//         return{count: state.count + 1};
//             default:
//                 return state;
//     }
//     }
  
//   const Comp2 = () => {
//     const [state,  dispatch] = useReducer(reducer, initialState)
//   return (
//     <div>
//       {''}
//       <p> count:{state.count}</p>
//       <button onClick={()=>{dispatch({type: "increment"})}}> Increment</button>

//       </div>


//   )
// }

// export default Comp2

import React,{useReducer} from 'react'
const initialState={count:0}


function reducer(state,action){
  switch(action.type){
    case 'add':
    return{ count: state.count + action.payload }
   
    case 'sub':
    return{
      count:state.count - action.payload}

      default:
        return;
    }
  }




const Comp2 = () => {

  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:'add', payload:2})}>increment</button>
      <br></br>
      <button  onClick={()=>dispatch({type:'sub', payload:2})}>decrement</button>
    </div>
  )
}

export default Comp2
