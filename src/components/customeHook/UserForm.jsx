import React, { useState } from 'react'
import useInputHook from './useInputHook'

function UserForm() {
    const [firstname, firstBindname, resetFirstName] = useInputHook('')
    const [lastname, lastBindname, resetLastName] = useInputHook('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`${firstname} ${lastname}`);
        resetFirstName()
        resetLastName()
    }
  return (
    <form onSubmit={handleSubmit}>UserForm:
        <div>First Name: 
            <input type='text' {...firstBindname} />
        </div>
        <div>Last Name: 
            <input type='text' {...lastBindname} />
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default UserForm