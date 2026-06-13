import { useState } from "react";
import JoinNowButton from "../../components/ui/JoinNowButton";
import styles from "./Prize.module.css";

const items = [
  {
    price: "$1000",
    desc: "Cras dapibus & Cras dapibus",
    icon: "/src/assets/icons/prizes/icon-medal-1.svg",
  },
  {
    price: "$500",
    desc: "Cras dapibus",
    icon: "/src/assets/icons/prizes/icon-medal-2.svg",
  },
  {
    price: "$250",
    desc: "Cras dapibus",
    icon: "/src/assets/icons/prizes/icon-medal-3.svg",
  },
];

export default function Prize() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = () => {
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

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
      <JoinNowButton
        className={styles.joinButton}
        isShowTerm={true}
        isSubmitting={isSubmitting}
        onClick={handleClick}
        type="button"
      />
    </section>
  );
}
