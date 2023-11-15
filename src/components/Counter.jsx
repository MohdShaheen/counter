import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/slice'

function Counter() {

  // state to hold value from input box
  const [range, setRange] = useState()

  // range
  console.log(range);

  // hook use to dispatch function in action
  const dispatch = useDispatch()
  // component can access the state by using useSelector Hook
  const count = useSelector((state=>state.counter.value))
  return (
    <>
      <div className='d-flex align-items-center justify-content-center flex-column w-100 mt-5'>
        <h1 style={{fontSize:'90px'}}>{count}</h1>
        <div className='mt-5'>
          <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-3'>Decrement</button>
          {/* Number is a method which is used to convert string into number */}
          <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
          <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-3 ms-3 '>Increment</button>
        </div>
      </div>
      {/* input box */}
      <div>
      <input onChange={(e)=>setRange(e.target.value)} type="text" className='form-control w-100 mt-3' placeholder='enter the range' style={{borderColor:'blue'}} />
    </div>
    </>
  )
}

export default Counter
