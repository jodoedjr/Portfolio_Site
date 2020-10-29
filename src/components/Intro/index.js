import React from "react";

const Intro = ({networks}) => {

    return (
        <header id="home">
        <div>
        <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline">Hi, I'm John Edwards.</h1>
                <h3>I'm an Atlanta-based <span>engineer</span> .</h3>
                <hr />
                <ul className="social">
                    {networks ? networks.map(network => {
                        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
                    }) : ""}
                </ul>
            </div>
        </div>
        </div>
        </header>
    );
}

export default Intro;