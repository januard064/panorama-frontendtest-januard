import React, { useContext, useState, useEffect } from "react"

import styles from './header.module.css'

import { MovieContext } from "../../App"

const SearchBar = () => {

    const { searchMovie, setSearchMovie, searchText, setSearchText } = useContext(MovieContext)


    const handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target

        // console.log(value)
        setSearchText(value)
    }

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MY_KEY}&query=${searchText}`)
            .then(res => res.json())
            .then(response => {
                // console.log('response', response)
                setSearchMovie(response.results)
            })
    }, [searchText])


    return (
        <>
            <form>
                <input placeholder="Search your favourites" className={styles.form} name={'search'} onChange={handleInputChange} />
            </form>
        </>
    )
}

export default SearchBar