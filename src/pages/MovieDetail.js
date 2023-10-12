import React from "react";

import { useParams } from "react-router-dom";

const MovieDetail = () => {

    const params = useParams()

    return (
        <>
            <div>Movie Detail for {params.movie_id}</div>
        </>
    )
}

export default MovieDetail