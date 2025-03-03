import React, { useState } from 'react'

const UseStateDemo1 = () => {

  const [user, setUser] = useState({
    name: "John",
    age: 20,
    email: "john@gmail.com"
  });

  const handleChange = () => {
    setUser({
      ...user,
      name: "Jane",
      age: 21,
      email: "jane@gmail.com" ,
      salary: 70000
    });
  }

  return (
    <div>
      <h1>UseStateDemo1</h1>
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <p>Email : {user.email}</p>
      {
        user.salary && <p>Salary : {user.salary}</p>
      }
      <button onClick={handleChange}>Change</button>

    </div>
  )
}

export default UseStateDemo1
