import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = () => {
    return (
        <div className=" w-screen aspect-video absolute pt-[18%] p-12">
            <h1 className="text-3xl font-bold">Another world</h1>
            <p>The quote by Anatole France, “Until one has loved an animal, a part of one’s soul remains unawakened”, sums it all about animals. Planet Earth is home to humans as well as animals. According to the survey, it is estimated that over 8 million species of animals exist on Earth, living on land and water. Each species has a unique place in the environment and balances the ecosystem. These species play a significant role in the stability of the ecosystem, environment, and our lives.</p>
            <div className="flex mt-8">
                <button className="flex items-center px-6 py-2 bg-white text-black font-bold rounded-md hover:bg-opacity-80">
                <CiPlay1 />Play</button>
                <button className=" mx-2 flex items-center px-6 py-2 bg-gray-400 opacity-80 text-black font-bold rounded-md hover:bg-opacity-80">
                <IoMdInformationCircleOutline />Watch more</button>
            </div>
        </div>
    );
}

export default VideoTitle;