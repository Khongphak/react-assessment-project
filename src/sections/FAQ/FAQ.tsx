import Accordion, { type AccordionItem } from "../../components/ui/Accordion";
import styles from "./FAQ.module.css";

const items: AccordionItem[] = [
  {
    title: "What is HFM?",
    content:
      "HFM is a global forex and CFD broker offering trading on currencies, commodities, indices, and stocks. We provide competitive spreads, fast execution, and a range of platforms to suit all experience levels.",
  },
  {
    title: "How do I create an account?",
    content:
      "Click the Sign Up button, fill in your details, and verify your email address. The process takes less than 5 minutes and you can start trading immediately after verification.",
  },
  {
    title: "What trading instruments are available?",
    content:
      "We offer over 1,000 instruments including forex pairs, commodities like gold and oil, major stock indices, individual equities, and cryptocurrencies.",
  },
  {
    title: "How do I deposit funds?",
    content:
      "Deposits can be made via bank transfer, credit/debit card, or e-wallets such as Skrill and Neteller. Most methods are processed instantly with no fees charged by HFM.",
  },
  {
    title: "Is my money safe?",
    content:
      "Yes. Client funds are held in segregated accounts with top-tier banks, completely separate from company funds. HFM is regulated by multiple financial authorities worldwide.",
  },
];

export default function FAQ() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>FAQs</h2>
      <div className={styles.wrapper}>
        <Accordion items={items} />
      </div>
    </section>
  );
}
