import React, { useState } from 'react'

function Learn() {

  const [name, setName] = useState("Hellow")

  const handleSubmit=()=>{

    console.log("State Value", name)
  }

  return (
    <>
      <p className='text-center font-bold text-2xl'>useState</p>
      <div className='text-left mx-2'>
        <li>Special function that takes the initial state as an argument and returns an array of two entries</li>
        <li>It allows you to have state variables in functional components</li>
      </div>
      <div>
        <input className='border-2 border-black'
          type="text"
          onChange={(e) => { setName(e.target.value) }} />
      </div>
      <div>
        <button className='border-2 border-black'
        onClick={handleSubmit}
          >Click Me</button>
      </div>
    </>
  )
}

export default Learn