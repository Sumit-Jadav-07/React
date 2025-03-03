import React from "react";
import { useParams } from "react-router-dom";

const NetflixPlayMovies = () => {
  const id = useParams().id;
  const name = useParams().name;
  return (
    <div>
      <h1 className="text-2xl font-bold">Play movies {id}, {name}</h1>
    </div>
  );
};

export default NetflixPlayMovies;
