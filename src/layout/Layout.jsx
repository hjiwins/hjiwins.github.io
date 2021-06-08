import React from "react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Footer from "./Footer";

import styles from "./Layout.module.css";
import { useMediaQuery } from "react-responsive";

export default function Layout(props) {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <div className={styles.pageWrap}>
      {isMobile ? <MobileHeader /> : <Header />}
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
