import React from 'react'

export const ChildOne = ({name}) => {
    const date = new Date()
  return (
    <div>
        Hello {name} {date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
    </div>
  )
}

export const MemoChildOne = React.memo(ChildOne)
