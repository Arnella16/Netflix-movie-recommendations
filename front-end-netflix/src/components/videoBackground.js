import React from "react";

const VideoBackground = ()=>{
    return (
        <div className="w-screen">
            <iframe 
            className="w-screen aspect-video"
            src="https://www.youtube.com/embed/xcJtL7QggTI?si=-aHxNuw03UKHP1ES&autoplay=1&mute=1" 
            title="YouTube video player" 
            frameBorder="0" 
            allowFullScreen>

            </iframe>
        </div>
    );
}

export default VideoBackground;