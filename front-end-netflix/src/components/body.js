import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './button';
import { useEmail } from './email-context';

const Body = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    navigate('/register');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignUp();
    }
  };

  const BoxStyle = {
    backgroundColor: 'black',
    color: 'grey',
    width: '18rem',
    padding: '0.5rem',
    border: '1px grey solid',
    borderRadius: '0.5rem',
    marginRight: '1rem',
  };

  return (
    <div style={{ marginTop: '15rem', textAlign: 'center' }}>
      <h1 style={{ color: 'white', fontSize: '40px', fontWeight: '700' }}>
        Watch Unlimited Movies!
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p style={{color:'white'}}>New to Netflix?</p>
          <Button width='5rem' onClick={handleSignUp}>
            Sign Up!
          </Button>
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Body;
