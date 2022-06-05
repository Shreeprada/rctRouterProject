import React from "react";
import {Link} from 'react-router-dom';
import styles from "./mystyle.module.css";
const Footer=()=>{
    return(
        <>
        <div className={styles.footer}>
<Link to="/about">About Us</Link>
<Link to="/contact">Contact Us</Link>
<Link to="/faq">FAQ</Link>
        </div>
        </>
    );
};
export  {Footer};