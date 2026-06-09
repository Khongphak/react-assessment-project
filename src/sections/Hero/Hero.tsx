export default function Hero() {
  return (
    <section style={{ padding: "80px 24px", textAlign: "center" }}>
      <h1>Your Product Headline</h1>
      <p style={{ fontSize: "20px", color: "var(--text)", maxWidth: "560px", margin: "0 auto 32px" }}>
        A short supporting line that explains the value and who it's for.
      </p>
      <a
        href="/signup"
        style={{
          display: "inline-block",
          background: "var(--accent)",
          color: "#fff",
          padding: "14px 32px",
          borderRadius: "8px",
          fontWeight: 600,
          textDecoration: "none",
          fontSize: "16px",
        }}
      >
        Get Started Free
      </a>
    </section>
  );
}
