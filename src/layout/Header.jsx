import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core";

function allProps(index) {
  return {
    id: `vertical-tab-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  tab: {
    maxWidth: 300,
  },
}));

function Header() {
  const uiClasses = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header>
      <div>
        <h1 className={styles.mainLogo}>Jiwon Hwang</h1>
      </div>
      <div className={uiClasses.root}>
        <Tabs
          className={uiClasses.tabs}
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
        >
          <Tab to="/" component={Link} label="About" className={uiClasses.tab} {...allProps(0)} />
          <Tab
            to="/project"
            component={Link}
            label="Projects"
            className={uiClasses.tab}
            {...allProps(1)}
          />
          <Tab to="/resume" component={Link} label="Resume" className={uiClasses.tab} {...allProps(2)} />
        </Tabs>
      </div>
    </header>
  );
}

export default Header;
