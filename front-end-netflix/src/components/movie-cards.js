import React from 'react';
import './moviecard.css';
import { useNavigate } from 'react-router-dom';

const MovieCards = ({movie}) =>{
    const navigate=useNavigate();
    console.log(movie);
    const handleChange = async()=>{
        navigate('/detail', {state:{movie}});
    }
    return (
        <div className='movie-card'>
            <img src={movie.image} alt={movie.title} className='movie-image'/>
            <button className='more-info' onClick={handleChange}>More info</button>
        </div>
    );
}

export default MovieCards;