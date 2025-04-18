import React, { useState } from 'react'
import useCounterHook from './useCounterHook'

function CounterOne() {
    const[count, increment, decrement, reset] = useCounterHook(1, 1)
  return (
    <div>
        <h2> Count = {count}</h2>
        <button onClick={increment}>Increament</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne