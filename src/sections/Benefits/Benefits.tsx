const items = [
  { title: "Fast", desc: "Up and running in minutes, no setup required." },
  { title: "Simple", desc: "Clean interface designed to get out of your way." },
  { title: "Reliable", desc: "99.9% uptime with automatic backups included." },
];

export default function Benefits() {
  return (
    <section style={{ padding: "60px 24px", borderTop: "1px solid var(--border)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "32px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {items.map((item) => (
          <div key={item.title}>
            <h2>{item.title}</h2>
            <p style={{ color: "var(--text)" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
