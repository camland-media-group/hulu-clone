import React from 'react'
import TextTruncate from 'react-text-truncate'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const posterURL = 'https://image.tmdb.org/t/p/original/'

const VideoCard = ({ movie }) => {
    return (
        <div className="videocard">
            <div className="videocard__img">
                <img 
                    src={`${posterURL}${movie.backdrop_path || movie.poster_path}`} 
                    alt={movie.title}
                />
            </div>
            <TextTruncate
                line={1}
                element="p"
                text={movie.overview}
                truncateText="..."
                // textTruncateChild={<a href="#">Read More</a>}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p className="videocard__stats">
                <span>{movie.media_type && `${movie.media_type} • `} </span>
                <span>{movie.release_date || movie.first_air_date} • </span>
                <span><ThumbUpIcon /></span>
                <span>{movie.vote_count}</span>
            </p>
        </div>
    )
}

export default VideoCard
