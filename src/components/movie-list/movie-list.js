import React from "react";

import styles from './movie-list.module.css'

import MovieCard from "../movie-card/movie-card";

const MovieList = (props) => {

    const { movies } = props

    return (
        <>
            <div className={styles.trendingContainer}>
                {movies.splice(0, 6).map((trend, index) => (
                    <div style={{ marginLeft: index == 0 ? '' : '24px' }}>
                        <MovieCard movie={trend} key={trend.title} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default MovieList