import React, { useState, useEffect } from "react"

// import styles from './trending-section.module.css'

import SubtitleSection from "../subtitle-section"
import MovieList from "../movie-list/movie-list"
import MovieCard from "../movie-card/movie-card"

const NewReleaseSection = (props) => {

    const [newReleaseMovie, setNewReleaseMovie] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${process.env.REACT_APP_MY_KEY}`)
            .then(res => res.json())
            .then(response => {
                setNewReleaseMovie(response.results)
            })

    }, [])

    return (
        <>
            <SubtitleSection title={'New Releases'} />
            <MovieList movies={newReleaseMovie} />


        </>
    )
}

export default NewReleaseSection