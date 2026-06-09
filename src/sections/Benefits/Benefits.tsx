import styles from "./Benefits.module.css";

const items = [
  { title: "Fast", desc: "Up and running in minutes, no setup required." },
  { title: "Simple", desc: "Clean interface designed to get out of your way." },
  { title: "Reliable", desc: "99.9% uptime with automatic backups included." },
];

export default function Benefits() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
