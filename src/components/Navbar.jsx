import React from "react";
import {Link,useNavigate} from 'react-router-dom';
import styles from "./mystyle.module.css";
import cart from "../cart.svg";
export const Navbar=()=>{
    const navi=useNavigate();
    return(
        <div>
           <div className={styles.nav}>
             <Link to='/' className={styles.link}>Home</Link>
            <Link to='/about' className={styles.link}>About</Link>
            <Link to='/contact' className={styles.link}>Contact Us</Link>
            <Link to='/faq' className={styles.link}>FAQ</Link>
            <Link to='/products' className={styles.link}>Products</Link>
            <img src={cart} alt="cart" className={styles.image}/>
            </div>
            <div className={styles.banner}>
                EXTRA 25% OFF FINAL SALE | USE CODE: LAST CALL
            </div>
        </div>
    );
};