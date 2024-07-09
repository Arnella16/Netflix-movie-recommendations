import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmail } from './email-context';
import Button from './button';

const Body = () => {
  const { email, setEmail } = useEmail();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUp = () => {
    console.log('Navigating to /register');
    navigate('/register');
  };

  const getInputData = (e) =>{
    // e.preventDefault();
  }

  const BoxStyle = {
    backgroundColor: 'black',
    color: 'grey',
    width: '18rem',
    padding: '0.5rem',
    border: '1px grey solid',
    borderRadius: '0.5rem',
    marginRight:'1rem',
  };

  return (
    <div style={{ marginTop: '15rem', textAlign: 'center' }}>
      <h1 style={{ color: 'white', fontSize: '40px', fontWeight: '700' }}>
        Watch Unlimited Movies!
      </h1>
      <form onSubmit={getInputData}>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <input
          type='email'
          value={email}
          onChange={handleChange}
          style={BoxStyle}
          placeholder='Enter your email address'
        />
        <Button width='5rem' onClick={handleSignUp}>Sign Up!</Button>
      </div>
      </form>
    </div>
  );
}

export default Body;
