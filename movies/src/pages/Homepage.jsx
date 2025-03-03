import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Moviecard from '../components/homepage/Moviecard';

const Homepage = () => {
  const [movieData, setMovieData] = useState([]);

  const handleDataFromNavbar = (data) => {
    setMovieData(data.Search || []);
    console.log('Homepage : ', data);
  };

  return (
    <div className='w-screen h-screen overflow-y-scroll bg-gray-100'>

      <Navbar onSendData={handleDataFromNavbar} />

      <div className='h-[full] w-full p-4 flex items-center justify-center'>
        <div className='w-[95%] bg-white p-6 rounded-md shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {movieData.length > 0 ? (
            movieData.map((movie, index) => (
              <Moviecard key={index} movie={movie} />
            ))
          ) : (
            <div className='text-lg text-center text-gray-500 col-span-full'>
              Search for a movie to see results here.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
