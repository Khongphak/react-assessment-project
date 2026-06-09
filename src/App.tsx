import styles from "./App.module.css";
import Footer from "./components/layout/Footer";
import Topbar from "./components/layout/Topbar";
import Benefits from "./sections/Benefits";
import CTA from "./sections/CTA";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <Topbar />
      <main className={styles.main}>
        <Hero />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
