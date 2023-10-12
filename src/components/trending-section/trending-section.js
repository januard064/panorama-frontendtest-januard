import React from "react"

import styles from './trending-section.module.css'

import SubtitleSection from "../subtitle-section"
import MovieCard from "../movie-card/movie-card"

const TrendingSection = (props) => {

    const { trendingMovie } = props

    return (
        <>
            <SubtitleSection title={'Trending Now'} />
            <div className={styles.trendingContainer}>
                {trendingMovie.splice(0, 6).map((trend, index) => (
                    <div style={{ marginLeft: index == 0 ? '' : '24px' }}>
                        <MovieCard movie={trend} key={trend.title} />
                    </div>
                ))}
            </div>

        </>
    )
}

export default TrendingSection