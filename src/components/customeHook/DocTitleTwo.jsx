import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle';

function DocTitleTwo() {
    // const [count, setCount] = useState(0)
    const [count, setCount] = useState(0);
    useDocumentTitle(count)
    
  return (
    <div>DocTitleTwo
        <button onClick={()=> setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleTwo