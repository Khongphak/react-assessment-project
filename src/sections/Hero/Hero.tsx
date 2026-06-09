import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <h1>Your Product Headline</h1>
      <p className={styles.subtitle}>
        A short supporting line that explains the value and who it's for.
      </p>
      <a href="/signup" className={styles.cta}>
        Get Started Free
      </a>
    </section>
  );
}
