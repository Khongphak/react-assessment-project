import styles from "./Prize.module.css";

const items = [
  {
    price: "$1000",
    desc: "Cras dapibus & Cras dapibus",
    icon: "src/assets/icons/prizes/icon-medal-1.svg",
  },
  {
    price: "$1000",
    desc: "Cras dapibus",
    icon: "src/assets/icons/prizes/icon-medal-2.svg",
  },
  {
    price: "$1000",
    desc: "Cras dapibus",
    icon: "src/assets/icons/prizes/icon-medal-3.svg",
  },
];

export default function Prize() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Prizes</h1>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.price} className={styles.itemContainer}>
            <img
              src={item.icon}
              alt={item.price}
              className={styles.medalStyle}
            />
            <h2 className={styles.priceText}>{item.price}</h2>
            <p className={styles.descText}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
