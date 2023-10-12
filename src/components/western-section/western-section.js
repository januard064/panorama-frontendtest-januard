import React, { useState, useEffect } from "react"

// import styles from './trending-section.module.css'

import SubtitleSection from "../subtitle-section"
import MovieList from "../movie-list/movie-list"
import MovieCard from "../movie-card/movie-card"

const WesternSection = (props) => {

    const [westernMovies, setWesternMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${process.env.REACT_APP_MY_KEY}`)
            .then(res => res.json())
            .then(response => {
                // console.log('response', response.results)
                setWesternMovies(response.results)
            })
    }, [])

    return (
        <>
            <SubtitleSection title={'Western Movies'} />
            <MovieList movies={westernMovies} />


        </>
    )
}

export default WesternSection