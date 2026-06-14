import JoinNowButton from "../../components/ui/JoinNowButton";
import styles from "./Prize.module.css";
import iconMedal1 from "../../assets/icons/prizes/icon-medal-1.svg";
import iconMedal2 from "../../assets/icons/prizes/icon-medal-2.svg";
import iconMedal3 from "../../assets/icons/prizes/icon-medal-3.svg";

const items = [
  { price: "$1000", desc: "Cras dapibus & Cras dapibus", icon: iconMedal1 },
  { price: "$500", desc: "Cras dapibus", icon: iconMedal2 },
  { price: "$250", desc: "Cras dapibus", icon: iconMedal3 },
];

export default function Prize() {
  const handleClick = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
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
        isSubmitting={false}
        onClick={handleClick}
        type="button"
      />
    </section>
  );
}
