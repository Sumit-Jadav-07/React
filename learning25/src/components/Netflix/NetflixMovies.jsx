import React from "react";
import { Link } from "react-router-dom";

const NetflixMovies = () => {
  const movies = [
    {
      id: 103,
      name: "Joker",
    },
    {
      id: 104,
      name: "Batman Begins",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Netflix Movies</h1>

      <ul className="mt-7">
        <li className="text-xl font-bold text-green-700">
          <Link to="/netflixmovies/play/101/The Godfather">The Godfather</Link>
        </li>
        <li className="text-xl font-bold text-green-700">
          <Link to="play/102/The Shawshank Redemption">
            The Shawshank Redemption
          </Link>
        </li>

        {movies.map((movie) => (
          <li className="text-xl font-bold text-green-700">
            <Link to={`play/${movie.id}/${movie.name}`}>{movie.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NetflixMovies;
