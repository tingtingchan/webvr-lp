import React from "react";
import Button from "../Button/Button";
import fourkitchensLogo from "../../assets/4k-logo.svg";
import styles from "./splash.module.scss";

const Splash = () => (
  <header className={styles.splash}>
    <img src={fourkitchensLogo} alt="Four Kitchens Logo" />
    <h1 className={styles.title}>We create WebVR for Everyone.</h1>
    <h2 className={styles.subhead}>
      Explore the experiences we’ve made using <br className="break" /> the
      phone & computer you already have.
    </h2>
    <Button link="/page-2">View This Page in VR</Button>
    <p className="small">Or continue down the page.</p>
  </header>
);

export default Splash;