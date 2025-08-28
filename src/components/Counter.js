import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment,decrement } from '../redux/slices/Counterslices'
import './Counter.css'

const Counter = () => {
    const count=useSelector( (state) =>
       state.counter.value
    )
    const dispatch=useDispatch();
  return (
    <div>
      <div className='flex justify-center items-center h-screen gap-6 bg-black'>
          <button  className="button-85" onClick={()=>dispatch(decrement())}>Decrement</button>
        <br></br>
        <br></br>
        <div className="text-white font-bold text-2xl">{count}</div>
        <br></br>
        <br></br>
         <button className="button-85"onClick={()=>dispatch(increment())}>Increment</button>
        </div>
      
    </div>
  )
}

export default Counter
