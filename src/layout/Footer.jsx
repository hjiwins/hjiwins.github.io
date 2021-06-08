import React from "react";
import styles from "./Footer.module.css";


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>made with <img src="/images/ReactLogo.png" alt="react-logo" /> by Jiwon</p>
        </footer>
    )
}