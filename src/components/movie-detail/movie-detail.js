import React, { useState, useEffect } from 'react'



import styles from './movie-detail.module.css'
import { Container } from '../container'

import NewReleaseSection from '../new-release-section/new-release-section'
import WesternSection from '../western-section/western-section'

const DetailMovie = (props) => {

    const { movie } = props

    const [imgUrl, setImgUrl] = useState()

    useEffect(() => {
        if (movie) {
            const baseUrl = "https://image.tmdb.org/t/p/"
            const imageUrl = `${baseUrl}${"w1280"}${movie.poster_path}`
            setImgUrl(imageUrl)
        }
    }, [movie])

    return (
        <>
            <div className={styles.bannerContainer}>
                <img src={imgUrl} alt="Movie Poster" className={styles.image} />
            </div>

            <Container>
                <div className={styles.detailContainer}>
                    <img src={imgUrl} alt="Movie Poster" className={styles.imagethumb} />
                    <div style={{ marginLeft: 32, color: '#FFFFFF' }}>
                        <div className={styles.movietitle}>
                            {movie.title}
                        </div>
                        <div style={{ marginTop:16, fontSize:24, }}>
                            {movie.tagline}
                        </div>
                    </div>
                </div>

                <NewReleaseSection />
                <WesternSection />
            </Container>

        </>
    )
}
export default DetailMovie