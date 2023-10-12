import React, { useEffect, useState } from "react";

// import component
import TrendingSection from "../components/trending-section/trending-section";
import { Container } from "../components/container";

const LandingPage = () => {

    const [trendingMovie, setTrendingMovie] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${process.env.REACT_APP_MY_KEY}`)
            .then(res => res.json())
            .then(response => {
                console.log('response', response.results)
                setTrendingMovie(response.results)
            })
    }, [])

    console.log('apiKey', process.env.REACT_APP_MY_KEY)

    return (
        <Container>

            <TrendingSection trendingMovie={trendingMovie} />
            <div>Landing Page</div>
        </Container>
    )
}

export default LandingPage