import React from "react";

import styles from './movie-card.module.css'

const MovieCard = (props) => {

    const { movie } = props

    const baseUrl = "https://image.tmdb.org/t/p/"
    const imageUrl = `${baseUrl}${"w185"}${movie.poster_path}`


    const getMovieYear = (year) => {

        const date = year.split("-")

        return date[0]
    }

    const getDisplayTitle = (title) => {
        if (title.length > 40) {
            return title.slice(0, 40) + '...'

        } else {
            return title
        }
    }

    return (
        <div className={styles.cardContainer}>
            {/* {} */}
            <img src={imageUrl} alt="Movie Poster" className={styles.image} />
            <div className={styles.voteAverage}>
                <div className={styles.voteText}>
                    {movie.vote_average} <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 400 }}>/ 10</span>
                </div>
            </div>
            <div className={styles.movieTitle}>
                {getDisplayTitle(movie.title)}
            </div>
            <div className={styles.releaseDate}>
                {getMovieYear(movie.release_date)}
            </div>
        </div>
    )
}

export default MovieCard