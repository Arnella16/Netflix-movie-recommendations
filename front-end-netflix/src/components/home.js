import React from "react";
import Header from "./header";
import Body from "./body";
import backgroundImage from './photos/netflix-bg-img.jpg';

const Home = () =>{
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
      };
    
    return (
        <>  
            <div style={divStyle}>
                <Header></Header>
                <Body></Body>
            </div>
        </>
    );
}

export default Home;