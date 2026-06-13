import { useState } from "react";
import Button from "../../ui/Button";
import styles from "./Topbar.module.css";
import iconLogo from "../../../assets/icons/topbar/icon-logo-hfm.svg";
import iconMobilePhone from "../../../assets/icons/topbar/icon-mobile-phone.svg";
import iconFlagEn from "../../../assets/icons/topbar/icon-flag-en.svg";

export default function Topbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className={styles.topbar}>
      <div className={styles.topbarInner}>
        <a href="/" className={styles.topbarBrand}>
          <p className={styles.logoMessage}>Member of HF Markets Group</p>
          <img
            src={iconLogo}
            alt="HF Markets Logo"
            className={styles.topbarLogo}
          />
        </a>
        <div className={styles.topbarRight}>
          <div className={styles.topbarInfoLinks}>
            <div className={styles.downloadApp}>
              <img
                src={iconMobilePhone}
                alt="Mobile Phone Icon"
                className={styles.mobileIcon}
              />
              <a href="/DownloadApp">Download App</a>
            </div>

            <a href="/ContactUs">Contact Us</a>
            <div className={styles.divider} />
            <a href="/PartnerWithUs">Partner with us</a>
            <div className={styles.divider} />
            <img
              src={iconFlagEn}
              alt="EN FlagIcon"
              className={styles.flagIcon}
            />
          </div>

          <div className={styles.topbarBottom}>
            <nav className={styles.topbarNav}>
              <a href="/">Markets</a>
              <a href="/trading">Trading</a>
              <a href="/investing">Investing</a>
              <a href="/toolsEducation">Tools & Education</a>
              <a href="/Company">Company</a>
            </nav>

            <div className={styles.topbarActions}>
              <Button variant="secondary" className={styles.loginButton}>
                Login
              </Button>
              <Button variant="primary" className={styles.registerButton}>
                Register
              </Button>
            </div>
          </div>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`${styles.overlay} ${sidebarOpen ? styles.overlayOpen : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
        <button
          className={styles.closeButton}
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav className={styles.sidebarNav}>
          <a href="/" onClick={() => setSidebarOpen(false)}>Markets</a>
          <a href="/trading" onClick={() => setSidebarOpen(false)}>Trading</a>
          <a href="/investing" onClick={() => setSidebarOpen(false)}>Investing</a>
          <a href="/toolsEducation" onClick={() => setSidebarOpen(false)}>Tools & Education</a>
          <a href="/Company" onClick={() => setSidebarOpen(false)}>Company</a>
        </nav>
        <div className={styles.sidebarActions}>
          <Button variant="secondary" className={styles.loginButton}>
            Login
          </Button>
          <Button variant="primary" className={styles.registerButton}>
            Register
          </Button>
        </div>
      </aside>
    </header>
  );
}
