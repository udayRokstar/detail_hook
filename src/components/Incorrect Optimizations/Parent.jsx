import React, { useState } from 'react'
import { MemoChild } from './Child'
import { MemoChildOne } from './ChildOne'

export const Parent = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Uday')

    console.log('Parent Component Render')
  return (
    <div>
        <button onClick={() => setCount((a) => a +1)}>Count - {count}</button>
        <button onClick={() => setName('Hosamani')}>Change name</button>
        <MemoChildOne name={name} />
        {/* <MemoChild name={name}> 
           <strong>Hello</strong> 
        </MemoChild> */}
    </div>
  )
}
