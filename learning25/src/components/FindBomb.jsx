import React, { useMemo, useState } from "react";

const FindBomb = () => {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);

  const gridSize = 3;
  const totalTiles = gridSize * gridSize

  const bombPosition = useMemo(() => {
    return Math.floor(Math.random() * totalTiles);
  }, [totalTiles]);

  const handleClick = (index) => {
    if (gameOver || grid[index] !== null) return;

    const newGrid = [...grid];
    if (index === bombPosition) {
      newGrid[index] = "💣";
      setGameOver(true);
    } else {
      newGrid[index] = "✓";
    }
    setGrid(newGrid);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        maxWidth: "300px",
        margin: "20px auto",
      }}
    >
      {grid.map((cell, index) => (
        <div
          key={index}
          style={{
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid black",
            backgroundColor: grid[index] !== null
              ? "#ddd"
              : "#fff",
            cursor: "pointer",}}
          onClick={() => handleClick(index)}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};

export default FindBomb;
