import React, { useState } from "react";
import backgroundImage from './photos/netflix-bg-img.jpg';
import Button from './button';
import { useEmail } from './email-context';

const Register = () => {
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: '1.5rem',
    padding: '2rem',
    boxShadow: '10px 10px 40px #696969, -20px -20px 40px #696969',
    height: '26rem',
    width: '22rem',
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
    backgroundColor: 'black',
    color: 'grey',
    width: '18rem',
    padding: '0.5rem',
    border: '1px grey solid',
    borderRadius: '0.5rem',
    marginTop: '1rem',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Sending registration request with:', { email, password });
    try {
      const response = await fetch('http://localhost:8080/api/v1/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      // Handle successful registration, e.g., redirect to a success page or notify user
      console.log('Registration successful');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <h1 style={{ color: 'white', fontSize: '28px', fontWeight: '700', marginBottom: '1rem' }}>Create a password</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={BoxStyle}
            type='text'
            placeholder='Email Address'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={BoxStyle}
            type='password'
            placeholder='Password'
          />
          <div style={{marginTop:'2rem'}}>
            <Button width='18rem' type="submit">Sign Up</Button>
          </div>
        </form>
        {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      </div>
    </div>
  );
}

export default Register;
