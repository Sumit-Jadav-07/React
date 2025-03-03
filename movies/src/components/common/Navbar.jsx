import axios from 'axios';
import React, { useState } from 'react';

const Navbar = ({ onSendData }) => {
    const [movieName, setMovieName] = useState('');
    const getMovieData = async () => {
        try {
            const response = await axios.get('http://www.omdbapi.com/', {
                params: {
                    s: movieName,
                    apikey:'9d57be0b',
                },
            });

            console.log(response.data);

            if (onSendData) {
                onSendData(response.data);
            }
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    };

    return (
        <div className='h-[10%] w-[100%] flex flex-row items-center justify-between p-4 bg-slate-700'>
            <div className='w-[50%] flex items-center justify-start ml-10'>
                <h1 className='text-3xl text-white'>Movies</h1>
            </div>

            <div className='w-[50%] flex items-center justify-end mr-10 gap-5'>
                <input
                    type='search'
                    value={movieName}
                    onChange={(e) => setMovieName(e.target.value)}
                    placeholder='Search movie'
                    className='rounded-lg p-2 text-black w-[350px]'
                />
                <button onClick={getMovieData} className='p-2 text-white rounded-lg bg-slate-500 w-28'>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Navbar;
