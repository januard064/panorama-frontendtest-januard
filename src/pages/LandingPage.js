import React, { useEffect, useState, useContext } from "react";

// import component
import { Container } from "../components/container";
import TrendingSection from "../components/trending-section/trending-section";
import NewReleaseSection from "../components/new-release-section/new-release-section";
import WesternSection from "../components/western-section/western-section";
import Banner from "../components/banner/banner";
import SearchedSection from "../components/searched-section/searched-section";

import { MovieContext } from "../App";


const LandingPage = () => {

    const { searchMovie, setSearchMovie } = useContext(MovieContext)

    return (
        <>
    
            {searchMovie.length == 0 && <Banner />}

            <Container>
                {searchMovie.length > 0 ?
                    (
                        <>
                            <SearchedSection />

                        </>
                    ) : (
                        <>
                            <TrendingSection />
                            <NewReleaseSection />
                            <WesternSection />
                        </>
                    )
                }


            </Container>
        </>
    )
}

export default LandingPage