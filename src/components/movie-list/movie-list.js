import React from "react";

import styles from './movie-list.module.css'

import MovieCard from "../movie-card/movie-card";

const MovieList = (props) => {

    const { movies } = props

    return (
        <>
            <div className={styles.trendingContainer}>
                {movies.splice(0, 6).map((trend, index) => (
                    <div key={trend.title} style={{ marginLeft: index == 0 ? '' : '24px' }}>
                        <MovieCard movie={trend} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default MovieList