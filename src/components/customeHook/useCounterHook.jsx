import React, {useState} from 'react'

function useCounterHook(initialValue=0, value) {
    const [count, setCount] = useState(initialValue)
    const increment = () =>{
        setCount(pre=> pre + value)
    }

    const decrement = () => {
        setCount(pre => pre - value)
    }

    const reset = () => {
        setCount(initialValue);
    }
 return [count, increment, decrement, reset]
}

export default useCounterHook