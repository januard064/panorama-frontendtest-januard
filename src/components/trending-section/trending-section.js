import React, { useState, useEffect } from "react"

// import styles from './trending-section.module.css'

import SubtitleSection from "../subtitle-section"
import MovieList from "../movie-list/movie-list"
import MovieCard from "../movie-card/movie-card"

const TrendingSection = (props) => {

    const [trendingMovie, setTrendingMovie] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${process.env.REACT_APP_MY_KEY}`)
            .then(res => res.json())
            .then(response => {
                // console.log('response', response.results)
                setTrendingMovie(response.results)
            })
    }, [])

    return (
        <>
            <SubtitleSection title={'Trending Now'} />
            <MovieList movies={trendingMovie} />


        </>
    )
}

export default TrendingSection