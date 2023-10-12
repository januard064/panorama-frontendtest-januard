import React, { useContext, useState } from "react"

import styles from './header.module.css'

import SearchBar from "./searchbar"

import { MovieContext } from "../../App"

const Header = () => {

    const { searchMovie, setSearchMovie } = useContext(MovieContext)

    return (
        <div className={styles.headerContainer} style={{ borderBottom: searchMovie.length > 0 ? '1px solid #FF6161' : '' }}>
            <div className={styles.headerContent}>
                <div className={styles.logo}>
                    FILM ID
                </div>
                <div>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default Header