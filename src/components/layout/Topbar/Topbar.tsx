import Button from "../../ui/Button";
import styles from "./Topbar.module.css";

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.topbarInner}>
        <a href="/" className={styles.topbarBrand}>
          <p className={styles.logoMessage}>Member of HF Markets Group</p>
          <img
            src="/src/assets/icons/topbar/icon-logo-hfm.svg"
            alt="HF Markets Logo"
            className={styles.topbarLogo}
          />
        </a>
        <div className={styles.topbarRight}>
          <div className={styles.topbarInfoLinks}>
            <div className={styles.downloadApp}>
              <img
                src="/src/assets/icons/topbar/icon-mobile-phone.svg"
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
              src="/src/assets/icons/topbar/icon-flag-en.svg"
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
      </div>
    </header>
  );
}
