import React, { useEffect, useState } from "react";

// import component
import { Container } from "../components/container";

import TrendingSection from "../components/trending-section/trending-section";
import NewReleaseSection from "../components/new-release-section/new-release-section";
import WesternSection from "../components/western-section/western-section";
import Banner from "../components/banner/banner";


const LandingPage = () => {

    return (
        <>
            <Banner />

            <Container>
                <TrendingSection />
                <NewReleaseSection />
                <WesternSection />
            </Container>
        </>
    )
}

export default LandingPage