import React from 'react'

const College = (props) => {
  return (
    <div>
      <h1>College Component</h1>
      <button onClick={()=>{props.checkButton()}}>Click Me</button>
    </div>
  )
}

export default College
