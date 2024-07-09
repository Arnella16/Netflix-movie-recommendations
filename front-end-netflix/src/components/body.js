// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useEmail } from './email-context';
// import Button from './button';

// const Body = () => {
//   const { email, setEmail } = useEmail();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSignUp = () => {
//     console.log('Navigating to /register');
//     navigate('/register');
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSignUp();
//     }
//   };

//   const getInputData = (e) =>{
//     // e.preventDefault();
//   }

//   const BoxStyle = {
//     backgroundColor: 'black',
//     color: 'grey',
//     width: '18rem',
//     padding: '0.5rem',
//     border: '1px grey solid',
//     borderRadius: '0.5rem',
//     marginRight:'1rem',
//   };

//   return (
//     <div style={{ marginTop: '15rem', textAlign: 'center' }}>
//       <h1 style={{ color: 'white', fontSize: '40px', fontWeight: '700' }}>
//         Watch Unlimited Movies!
//       </h1>
//       <form onSubmit={getInputData}>
//       <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
//         <input
//           type='email'
//           value={email}
//           onChange={handleChange}
//           onKeyPress={handleKeyPress}
//           style={BoxStyle}
//           placeholder='Enter your email address'
//         />
//         <Button width='5rem' onClick={handleSignUp}>Sign Up!</Button>
//       </div>
//       </form>
//     </div>
//   );
// }

// export default Body;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './button';
import { useEmail } from './email-context';

const Body = () => {
  const { email, setEmail } = useEmail();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      navigate('/register');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    // You can update context here if needed
    setEmail(e.target.value);
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
          <input
            type='email'
            value={email}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            style={BoxStyle}
            placeholder='Enter your email address'
          />
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
