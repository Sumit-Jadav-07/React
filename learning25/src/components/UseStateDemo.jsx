import React, { useState } from 'react'

const UseStateDemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>UseStateDemo</h1>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default UseStateDemo
