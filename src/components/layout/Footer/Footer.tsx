import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.innerLeft}>
          <div>
            <p className={styles.title}>Find us on</p>
            <img
              src="/src/assets/images/footer/image-social-apps.png"
              alt="social-apps"
              className={styles.socialApps}
            />
          </div>

          <div className={styles.downloadAppContainer}>
            <p className={styles.title}>Download HFM App</p>
            <div className={styles.appsImageContainer}>
              <img
                src="/src/assets/images/footer/image-apple-store.png"
                alt="social-apps"
              />
              <img
                src="/src/assets/images/footer/image-google-play.png"
                alt="social-apps"
              />
            </div>
          </div>
        </div>
        <div className={styles.innerRight}>
          <p className={styles.title}>Risk Warning</p>
          <span className={styles.riskWarningDesc}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pLorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam
            felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
            consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
            nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
            venenatis vitae, justo. Nullam dictum felis eu p
          </span>
        </div>
        {/* <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p> */}
      </div>
    </footer>
  );
}
