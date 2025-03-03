import React from 'react'

const Home = () => {

  const homeStyle = {
    height: "65vh",
    backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    <div style={homeStyle}>
      <h1 style={{color:"red"}}>Home Component</h1>
    </div>
  )
}

export default Home
