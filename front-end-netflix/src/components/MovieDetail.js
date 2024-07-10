import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";

const MovieDetail = () => {
    const detailStyle={
        backgroundColor:'black',
        color:'white',
        display:'flex',
    }
    const innerDetailStyle={
        marginTop:'3rem',
        display:'flex',
        flexDirection:'column',
        marginLeft:'1rem',
    }
    const location = useLocation();
    const { movie } = location.state; // Retrieve the movie object from location state

    return (
        <div style={detailStyle}>
            <img src={movie.image} alt={movie.title} />
            <div style={innerDetailStyle}>
                <h1 style={{fontWeight:'700', fontSize:'36px'}}>{movie.title}</h1>
                <p>{movie.description}</p>
                <div style={{display:'flex',alignItems:'center', marginTop:'1.5rem', maxWidth:'10rem',}}>
                    <h1 style={{fontWeight:'500', fontSize:'20px'}}>Genre </h1>
                    <div style={{backgroundColor:'#696969', borderRadius:'0.5rem', padding:'4px', margin:'1rem' }}>{movie.genre[0]}</div>
                    <div style={{backgroundColor:'#696969', borderRadius:'0.5rem', padding:'4px', margin:'1rem'}}>{movie.genre[1]}</div>
                    <div style={{backgroundColor:'#696969', borderRadius:'0.5rem', padding:'4px', margin:'1rem'}}>{movie.genre[2]}</div>
                </div>
                <div>
                    <h1 style={{fontWeight:'500', fontSize:'20px'}}>Rating : {movie.rating}</h1>
                    <h1 style={{fontWeight:'500', fontSize:'20px', marginTop:'1rem'}}>Year : {movie.year}</h1>
                </div>
                <p style={{marginTop:'1rem'}}>For more details about the movie's cast and crew, visit : {movie.imdb_link}</p>
                <button style={{backgroundColor:'#696969', marginTop:'2rem', borderRadius:'0.5rem', padding:'12px', width:'max-content', display:'flex', justifyContent:'space-between', alignItems:'center'}}><FaPlus />Add to Watchlist</button>
            </div>
            {/* Add more movie details here */}
        </div>
    );
}

export default MovieDetail;
