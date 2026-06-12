import styles from "./App.module.css";
import Footer from "./components/layout/Footer";
import Topbar from "./components/layout/Topbar";
import Prize from "./sections/Prize";
import CTA from "./sections/CTA";
import FAQ from "./sections/FAQ";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import LeaderboardTable, { mockLeaderboardData } from "./sections/Leaderboard";

function App() {
  return (
    <>
      <Topbar />
      <main className={styles.main}>
        <Hero />
        <Features />
        <Prize />
        <CTA />
        <LeaderboardTable data={mockLeaderboardData} />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
