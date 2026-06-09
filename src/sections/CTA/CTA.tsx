export default function CTA() {
  return (
    <section style={{ padding: "80px 24px", textAlign: "center", borderTop: "1px solid var(--border)" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Ready to get started?</h2>
      <p style={{ color: "var(--text)", marginBottom: "28px" }}>
        Join thousands of users already using our product.
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
        Start Now
      </a>
    </section>
  );
}
