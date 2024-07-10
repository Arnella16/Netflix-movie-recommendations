import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from './photos/Netflix-logo.png'
import Button from './button';
import MainContainer from './main_container';
import MovieContainer from './MovieContainer';

const Main = () => {
    const whole={
        backgroundColor:'black',
        color:'white',
    };
    const navigate = useNavigate();
    const handleHome = async ()=>{
        navigate('/');
    };
    const handleSearch = async ()=>{
        navigate('/search');
    };
  return (
    <div className="w-screen" style={whole}>
        <div className='flex'>
        <img className='w-48' src={logo} alt="Netflix logo" />
        <div className='flex'>
        <div className='flex' style={{marginLeft:'50rem', justifyContent:'center', alignItems:'center'}}> 
            <Button width='5rem' margin='0.5rem' onClick={handleHome}>Logout</Button>
            <Button width='8rem' onClick={handleSearch}>Search Movies</Button>
        </div>
      </div>
    </div>
    <MainContainer></MainContainer>
    <MovieContainer></MovieContainer>
    </div>
  )
}

export default Main;
