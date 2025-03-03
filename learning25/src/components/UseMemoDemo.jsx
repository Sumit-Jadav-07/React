import React, { useMemo, useState } from "react";

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // ✅ useMemo lagaya → Sirf jab count change hoga tabhi chalega
  const doubleCount = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]); // Dependency -> count

  return (
    <div
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <h2>Count: {count}</h2>
      <h2>Double Count: {doubleCount}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
};

export default UseMemoDemo;
