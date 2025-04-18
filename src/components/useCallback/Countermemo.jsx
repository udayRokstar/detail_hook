import React, { useMemo, useState } from 'react'

function Countermemo() {
    const [counterone, setCounterone] = useState(0)
    const [countertwo, setCountertwo] = useState(0)

    const incrementCounterone = () => {
        console.log('one')
        setCounterone(counterone + 1);
    }
    const incrementCountertwo = () => {
        console.log('two')
        setCountertwo(countertwo + 1);
    }

    const isEven = useMemo(() => {
        console.log("rerendering..!")
        let i = 0;
        while(i < 2000000000) i++
        return counterone % 2 === 0
    },[counterone])
  return (
    <div>
        <div>
            <button onClick={incrementCounterone}>Counter 1 {counterone}</button>
            <span>{isEven? "Even": "Odd"}</span>
        </div>
        <div>
            <button onClick={incrementCountertwo}>Counter 2 {countertwo}</button>
        </div>
    </div>
  )
}

export default Countermemo