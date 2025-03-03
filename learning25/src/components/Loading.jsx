import React, { useState } from 'react'

const Loading = () => {

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {/* {
        isLoading ? <h1>Loading...</h1> : ""
      } */}

      {
        isLoading && <h1>Loading...</h1>
      }
      <button onClick={() => setIsLoading(false)}>Stop Loading</button>
    </div>
  )
}

export default Loading
