import React, { useContext, useState } from "react"

import styles from './header.module.css'

import SearchBar from "./searchbar"

const Header = () => {


    return (
        <div className={styles.headerContainer}>
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