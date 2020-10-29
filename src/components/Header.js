import React from 'react';
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Header = ({networks}) => {
   return (
      <header id="home">

         <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><Link to="/" className="smoothscroll" href="#home">Home</Link></li>
               {/* <li><Link to="/" className="smoothscroll" href="#resume">Resume</Link></li> */}
               <li><Link to="/projects" className="smoothscroll" href="#portfolio">Projects</Link></li>
               <li><Link to="/contact" className="smoothscroll" href="#contact">Contact</Link></li>
            </ul>

         </nav>

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

      </header>
   );
}

export default Header;
