import styles from "./Features.module.css";

export default function Features() {
  return (
    <div className={styles.featuresContainer}>
      <h1 className={styles.title}>Quisque rutrum</h1>
      <div className={styles.featuresContent}>
        <div className={styles.boxContainer}>
          <div className={styles.featureContainer}>
            <img
              src="/src/assets/icons/features/icon-account.svg"
              alt="icon-account"
              className={styles.featureIcon}
            />
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </div>
          <div className={styles.featureContainer}>
            <img
              src="/src/assets/icons/features/icon-cash.svg"
              alt="icon-cash"
              className={styles.featureIcon}
            />
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </div>
        </div>
        <img
          src="/src/assets/images/features/image-mobile-phones.png"
          alt="image-mobile-phones"
          className={styles.mobilePhoneImageStyle}
        />
        <div className={styles.featuresContent}>
          <div className={styles.boxContainer}>
            <div className={styles.featureContainer}>
              <img
                src="/src/assets/icons/features/icon-candle-stick.svg"
                alt="icon-candle-stick"
                className={styles.featureIcon}
              />
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
            </div>
            <div className={styles.featureContainer}>
              <img
                src="/src/assets/icons/features/icon-account.svg"
                alt="icon-account"
                className={styles.featureIcon}
              />
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
