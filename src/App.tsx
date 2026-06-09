import "./App.css";
import Footer from "./components/layout/Footer";
import Topbar from "./components/layout/Topbar";
import Benefits from "./sections/Benefits";
import CTA from "./sections/CTA";
import Hero from "./sections/Hero";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100svh" }}>
      <Topbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
