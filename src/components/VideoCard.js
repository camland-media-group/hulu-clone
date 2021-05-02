import React from 'react'

const VideoCard = ({ movie }) => {
    return (
        <div className="videocard">
            <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2338453/settings_images/ke9mPRWnQkef1SSP2Vhn_React_Netflix_Clone.png" alt="img"/>
            <p>Movie desc</p>
            <h2>Movie title</h2>
            <p>number of likes</p>
        </div>
    )
}

export default VideoCard
