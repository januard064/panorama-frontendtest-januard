import React, { useEffect, useState } from "react"

import styles from './banner.module.css'

const Banner = () => {

    const [bannerMovie, setBannerMovie] = useState()
    const [imgUrl, setImgUrl] = useState()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${process.env.REACT_APP_MY_KEY}`)
            .then(res => res.json())
            .then(response => {
                // console.log('response', response.results)
                setBannerMovie(response.results[0])
            })
    }, [])

    useEffect(() => {
        if (bannerMovie) {
            const baseUrl = "https://image.tmdb.org/t/p/"
            const imageUrl = `${baseUrl}${"w1280"}${bannerMovie.poster_path}`
            setImgUrl(imageUrl)
        }


        console.log(bannerMovie)
    }, [bannerMovie])



    if (!bannerMovie) {
        return <></>
    }

    return (
        <div className={styles.bannerContainer}>
            <img src={imgUrl} alt="Movie Poster" className={styles.image} />
        </div>
    )
}

export default Banner