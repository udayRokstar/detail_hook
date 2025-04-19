import React from 'react'

export const Child = ({children, name}) => {
    console.log('Child Component Render')
  return (
    <div>{children} {name}</div>
  )
}

export const MemoChild = React.memo(Child)