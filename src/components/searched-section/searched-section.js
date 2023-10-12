import React, { useState, useEffect, useContext } from "react"

// import styles from './trending-section.module.css'

import SubtitleSection from "../subtitle-section"
import MovieList from "../movie-list/movie-list"
import MovieCard from "../movie-card/movie-card"

import { MovieContext } from "../../App"

const SearchedSection = (props) => {

    const { searchMovie, setSearchMovie, searchText } = useContext(MovieContext)

    return (
        <div style={{ marginTop: 210 }}>
            <div style={{ color:'#FFFFFF', marginBottom:24 , fontSize:24}}>
                The result of <span style={{ fontWeight:700, fontSize:28 }}>`{searchText}`</span>
            </div>
            <MovieList movies={searchMovie} />
        </div>
    )
}

export default SearchedSection