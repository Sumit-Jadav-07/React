import React from 'react'
import College from './College'
const University = () => {

  const checkButton = () => {
    alert("Button Clicked from University Component");
  }

  return (
    <div>
      <h1>University Component</h1>
      <button onClick={()=>{checkButton()}}>Click Me</button>
      <College checkButton={checkButton}></College>
    </div>
  )
}

export default University
