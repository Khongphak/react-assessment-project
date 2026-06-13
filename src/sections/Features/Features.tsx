import styles from "./Features.module.css";
import iconAccount from "../../assets/icons/features/icon-account.svg";
import iconCash from "../../assets/icons/features/icon-cash.svg";
import iconCandleStick from "../../assets/icons/features/icon-candle-stick.svg";
import imageMobilePhones from "../../assets/images/features/image-mobile-phones.png";

export default function Features() {
  return (
    <div className={styles.featuresContainer}>
      <h1 className={styles.title}>Quisque rutrum</h1>
      <div className={styles.featuresContent}>
        <div className={styles.boxContainer}>
          <div>
            <img
              src={iconAccount}
              alt="icon-account"
              className={styles.featureIcon}
            />
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </div>
          <div>
            <img
              src={iconCash}
              alt="icon-cash"
              className={styles.featureIcon}
            />
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </div>
        </div>
        <img
          src={imageMobilePhones}
          alt="image-mobile-phones"
          className={styles.mobilePhoneImageStyle}
        />

        <div className={`${styles.boxContainer} ${styles.boxContainerRight}`}>
          <div>
            <img
              src={iconCandleStick}
              alt="icon-candle-stick"
              className={styles.featureIcon}
            />
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </div>
          <div>
            <img
              src={iconAccount}
              alt="icon-account"
              className={styles.featureIcon}
            />
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </div>
        </div>
      </div>
    </div>
  );
}
