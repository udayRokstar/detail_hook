import React, { useEffect, useRef, useState } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const timerRef = useRef(0);

    useEffect(() => {
      timerRef.current = setInterval(()=> {
            setTimer(prev => prev + 1)
        }, 1000)

        return () => {
            clearInterval(timerRef.current)
        }
    }, [])

  return (
    <div>Hook Timer {timer}
      <button onClick={()=> clearInterval(timerRef.current)}> clear hook</button>
    </div>
  )
}

export default HookTimer