import React from "react";

import styles from './footer.module.css'

const Footer = () => {


    return (
        <div className={styles.footerContainer}>
            <div style={{ display: 'flex' }}>
                <div className={styles.logo}>
                    FILM.ID
                </div>
                <div style={{ fontWeight: 300, fontSize: 48, marginLeft: 12 }}>
                    © 2021
                </div>


            </div>
            <div style={{ marginTop: 12 }}>
                powered by <span style={{ textDecoration: 'underline' }}>ASIAPMOVIE</span>
            </div>

        </div>
    )
}

export default Footer