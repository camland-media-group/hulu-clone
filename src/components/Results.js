import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import axios from '../api/axios'

const Results = ({ selectedOption }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const request = await axios.get(selectedOption)
            // console.log(request.data.results);
            setMovies(request.data.results)

            return request
        }

        fetchData()
    }, [selectedOption])

    return (
        <div className="results">
        {movies.map(movie => (
            <VideoCard key={movie.id} movie={movie} />
        ))}
        </div>
    )
}

export default Results
