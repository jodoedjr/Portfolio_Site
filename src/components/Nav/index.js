import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Nav = (props) => {
    // return (
    //     <div className="navigation">
    //         {/* <img src={logo} className="logo-image" alt="Logo" /> */}
    //         <div className="navigation-sub">
    //             <Link to="/" className="item">Home</Link>
    //             <Link to="/projects" className="item">Projects</Link>
    //             <Link to="/contact" className="item">Contact</Link>
    //         </div>
    //     </div>
    // )

    return (
            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><Link to="/" className="smoothscroll">Home</Link></li>
                    {/* <li><Link to="/" className="smoothscroll" >Resume</Link></li> */}
                    <li><Link to="/projects" className="smoothscroll" >Projects</Link></li>
                    <li><Link to="/contact" className="smoothscroll" href="#contact">Contact</Link></li>
                </ul>
            </nav>
    );
}

export default Nav;
