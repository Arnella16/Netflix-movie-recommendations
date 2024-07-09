import React, { useState } from 'react';
import backgroundImage from './photos/netflix-bg-img.jpg';
import Button from './button';

const Login = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: '1.5rem',
    padding: '2rem',
    boxShadow: '10px 10px 40px #696969, -20px -20px 40px #696969',
    height: '65vh',
    width: '25vw',
  };

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const BoxStyle = {
    backgroundColor:'black',
    color:'grey',
    width:'18rem',
    padding:'0.5rem',
    border:'1px grey solid',
    borderRadius:'0.5rem',
    marginTop:'1rem',
  };

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
};

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
      <h1 style={{ color: 'white', fontSize: '28px', fontWeight: '700', marginBottom: '1rem' }}>Sign In</h1>
      <form onSubmit={handleSubmit}>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={BoxStyle}
                        type='email'
                        placeholder='Email Address'
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={BoxStyle}
                        type='password'
                        placeholder='Password'
                    />
                </form>
                <div style={{marginTop:'2rem'}}>
                <Button width='18rem' type="submit">Sign Up</Button>
                </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'1rem'}}>
          <p style={{color:'white'}}>New to Netflix?</p>
          <Button width='5rem'>Sign Up!</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
