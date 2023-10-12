import React from "react"

import styles from './header.module.css'

const SearchBar = () => {

    return (
        <>
            <form>
                <input placeholder="Search your favourites"  className={styles.form}/>
            </form>
        </>
    )
}

export default SearchBar