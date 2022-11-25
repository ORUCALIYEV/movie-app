import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie" >
      <div>
        <p> {movie.release_date} </p>
      </div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.original_title}
        />
      </div>
      <div>
        <h3>{movie.title}</h3>
        <span> Average rating: {movie.vote_average}</span>
      </div>
    </div>
  );
};

export default MovieCard;
