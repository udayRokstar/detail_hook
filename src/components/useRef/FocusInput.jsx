import React, { useEffect, useRef } from 'react'

function FocusInput() {
    const a = useRef();

    useEffect(() => {
        a.current.focus()
    },[])
  return (
    <div>
        UserName: <input type='text' ref={a} />
        Password: <input type='password' />
    </div>
  )
}

export default FocusInput