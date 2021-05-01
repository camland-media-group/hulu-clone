import React from 'react'

const VideoCard = ({ movie }) => {
    return (
        <div className="videocard">
            <h1>Hello</h1>
            <img src="https://image.tmdb.org/t/p/w500//6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg" alt="img"/>
            <p>Movie desc</p>
            <h2>Movie title</h2>
            <p>number of likes</p>
        </div>
    )
}

export default VideoCard
