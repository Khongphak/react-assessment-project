import { useState } from "react";
import styles from "./Accordion.module.css";

export type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ul className={styles.list}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <li key={index} className={styles.item}>
            <button
              className={styles.trigger}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              {item.title}
              <i
                className={[
                  "pi pi-angle-down",
                  styles.icon,
                  isOpen && styles.iconOpen,
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            </button>
            <div
              className={[styles.content, isOpen && styles.contentOpen]
                .filter(Boolean)
                .join(" ")}
            >
              <div className={styles.contentInner}>
                <p className={styles.contentText}>{item.content}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
