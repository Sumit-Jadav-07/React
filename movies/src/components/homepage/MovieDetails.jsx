import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log(movieId);
        const getMovieData = async () => {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?i=${movieId}&apikey=9d57be0b`);
                if (response.data.Response === "True") {
                    setMovieDetails(response.data);
                } else {
                    console.error("Movie not found or error fetching data.");
                    setError(true);
                }
            } catch (error) {
                console.error('Error fetching movie data:', error);
                setError(true);
            }
        };
        getMovieData();
    }, [movieId]);

    if (error) {
        return (

            <div className="flex flex-col items-center justify-center min-h-screen">
                <p className="text-2xl font-bold text-red-500">Movie not found or error fetching data.</p>
                <Link to="/">
                    <button className="p-2 mt-4 text-lg font-semibold text-white bg-blue-500 rounded w-36 hover:bg-blue-600">
                        Back to Home
                    </button>
                </Link>
            </div>
        );
    }

    if (!movieDetails) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <p className="text-xl">Loading movie details...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="max-h-full p-6 bg-white rounded-lg shadow-md w-100">
                <h1 className="h-full mb-4 text-3xl font-bold">{movieDetails.Title}</h1>
                <div className="flex flex-col md:flex-row">
                    <img src={movieDetails.Poster} alt={movieDetails.Title} className="object-cover mb-4 rounded-md h-100 w-100 md:w-1/3 md:mb-0 md:mr-4" />
                    <div className="flex flex-col">
                        <p><strong>Year:</strong> {movieDetails.Year}</p>
                        <p><strong>Genre:</strong> {movieDetails.Genre}</p>
                        <p><strong>Director:</strong> {movieDetails.Director}</p>
                        <p><strong>Actors:</strong> {movieDetails.Actors}</p>
                        <p><strong>Plot:</strong> {movieDetails.Plot}</p>
                        <p><strong>Awards:</strong> {movieDetails.Awards}</p>
                        <p><strong>BoxOffice:</strong> {movieDetails.BoxOffice}</p>
                        <p><strong>Country:</strong> {movieDetails.Country}</p>
                        <p><strong>Language:</strong> {movieDetails.Language}</p>
                        <p><strong>Metascore:</strong> {movieDetails.Metascore}</p>
                        <p><strong>Rated:</strong> {movieDetails.Rated}</p>
                        <p><strong>Released:</strong> {movieDetails.Released}</p>
                        <p><strong>Runtime:</strong> {movieDetails.Runtime}</p>
                        <p><strong>Writer:</strong> {movieDetails.Writer}</p>
                        <p><strong>imdbRating:</strong> {movieDetails.imdbRating}</p>
                        <p><strong>imdbVotes:</strong> {movieDetails.imdbVotes}</p>
                        <Link to="/">
                            <button className="p-2 text-lg font-semibold text-white bg-blue-500 rounded w-36 hover:bg-blue-600">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
