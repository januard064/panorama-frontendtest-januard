import React, { useState, useContext, useEffect} from "react";

import { useParams } from "react-router-dom";

import DetailMovie from "../components/movie-detail/movie-detail";

const MovieDetail = () => {

    const params = useParams()


    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=${process.env.REACT_APP_MY_KEY}`)
            .then(res => res.json())
            .then(response => {
                console.log('response', response)
                setMovie(response)
            })
    }, [])

    return (
        <>
            <DetailMovie movie={movie} />
        </>
    )
}

export default MovieDetail