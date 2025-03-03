import React from "react";

const MapDemo = () => {
  const users = ["Riddh", "Sumit", "Kishan"];

  const students = [
    { name: "Riddh", age: 22 },
    { name: "Sumit", age: 23 },
    { name: "Kishan", age: 24 },
  ];

  return (
    <div>
      {users.map((user) => (
        <h2>{user}</h2>
      ))}

      {students.map((student) => (
        <>
          <h2>{student.name}</h2>
          <p>{student.age}</p>
        </>
      ))}
    </div>
  );
};

export default MapDemo;
