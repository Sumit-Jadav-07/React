import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <div className="overflow-hidden transition-transform transform bg-white border border-gray-300 rounded-lg shadow-md hover:scale-105">
      <div className="h-[400px] w-full overflow-hidden">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x400?text=No+Image'}
          alt={movie.Title}
          className="object-fill w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{movie.Title}</h3>
        <p className="text-sm text-gray-600">Year: {movie.Year}</p>
        <p className="text-sm text-gray-600">Type: {movie.Type}</p>

        <button
          className="px-4 py-2 mt-4 text-sm font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
