import React, { useEffect, useState } from "react";
import axios from 'axios';
import MovieCards from "./movie-cards";

const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
      'x-rapidapi-key': '8a248f9c53msh7fee0cb3b47bdbbp15b375jsn1d0bc33620a6',
      'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };

const MovieContainer = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options);
                setMovies(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on mount

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {movies.map((movie, index) => (
                <MovieCards movie={movie}></MovieCards>
            ))}
        </div>
    );
}

export default MovieContainer;
