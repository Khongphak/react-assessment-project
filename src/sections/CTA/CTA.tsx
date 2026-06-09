import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Ready to get started?</h2>
      <p className={styles.subtitle}>
        Join thousands of users already using our product.
      </p>
      <a href="/signup" className={styles.cta}>
        Start Now
      </a>
    </section>
  );
}
