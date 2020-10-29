import React from "react";
import Intro from "../components/Intro";
import Header from "../components/Header";

const Home = ({networks}) => {
    return (
        <Header networks={networks} />
        // <Intro networks={networks} />
    );
}

export default Home;