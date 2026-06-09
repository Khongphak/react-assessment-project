import styles from "./Topbar.module.css";

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.topbarInner}>
        <a href="/" className={styles.topbarBrand}>My App</a>
        <nav className={styles.topbarNav}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
