import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = (props) => {
    return (
        <footer className="bg-dark">
            <FaGithub />
            <FaLinkedin />
            <div className="footer-copyright text-center py-3">© 2020 Copyright John Edwards
            </div>
        </footer>
    )
}

export default Footer;