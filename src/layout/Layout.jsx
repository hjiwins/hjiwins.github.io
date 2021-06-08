import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.css";

export default function Layout(props) {
    return (
        <div className={styles.pageWrap}>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}