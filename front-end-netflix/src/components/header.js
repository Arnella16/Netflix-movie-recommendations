import React from 'react'
import logo from './photos/Netflix-logo.png'
import Button from './button'

const Header = () => {
  return (
    <div className='flex'>
      <img className='w-48' src={logo} alt="Netflix logo" />
      <div className='flex'>
        <div className='flex' style={{marginLeft:'60rem', justifyContent:'center', alignItems:'center'}}> 
            <Button width='5rem'>Sign In</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
