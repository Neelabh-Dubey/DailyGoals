import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGoogle, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import classes from './Footer.module.css';


function Footer(){
    return (
        <div className={classes.footer}>
            <a href='mailto:neelabhdubey9@gmail.com'><FontAwesomeIcon icon={faGoogle} size='2x' /></a>
            <a href='https://www.linkedin.com/in/neelabhdubey/'><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
            <a href='https://github.com/Neelabh-Dubey'><FontAwesomeIcon icon={faGithub} size='2x' /></a>
        </div>
    )
}

export default Footer;