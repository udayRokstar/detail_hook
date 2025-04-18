import React from 'react'

function ComponentB(props) {
  return (
    <div>ComponentB
        <button onClick={props.mynext}> from B</button>
    </div>
  )
}

export default ComponentB