import React from "react";
import { Link } from "react-router-dom";

const NetflixSeries = () => {
  const series = [
    {
      id: 101,
      name: "Stranger Things",
    },
    {
      id: 102,
      name: "Money Heist",
    },
    {
      id: 103,
      name: "Breaking bad",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-pink-500">Netflix Series</h1>

      <ul>
        {series.map((s) => (
          <li className="text-lg font-bold text-blue-400">
            <Link to={`play/${s.id}/${s.name}`}>{s.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NetflixSeries;
