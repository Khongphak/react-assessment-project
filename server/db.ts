import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database(path.join(__dirname, "registrations.db"));

db.exec(`
  CREATE TABLE IF NOT EXISTS registrations (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name  TEXT    NOT NULL,
    last_name   TEXT    NOT NULL,
    country     TEXT    NOT NULL,
    code        TEXT    NOT NULL,
    phone       TEXT    NOT NULL,
    email       TEXT    NOT NULL UNIQUE,
    experience  INTEGER NOT NULL,
    created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS leaderboard (
    id    INTEGER PRIMARY KEY AUTOINCREMENT,
    name  TEXT    NOT NULL,
    gain  REAL    NOT NULL
  )
`);

const leaderboardEmpty = (db.prepare("SELECT COUNT(*) as count FROM leaderboard").get() as { count: number }).count === 0;

if (leaderboardEmpty) {
  const insert = db.prepare("INSERT INTO leaderboard (name, gain) VALUES (?, ?)");
  const seedMany = db.transaction((entries: { name: string; gain: number }[]) => {
    for (const entry of entries) insert.run(entry.name, entry.gain);
  });
  seedMany([
    { name: "Alice Johnson",   gain: 12.45 },
    { name: "Bob Smith",       gain: 8.32  },
    { name: "Carlos Rivera",   gain: 23.17 },
    { name: "Diana Chen",      gain: 5.89  },
    { name: "Ethan Park",      gain: 31.04 },
    { name: "Fatima Al-Hassan",gain: 18.76 },
    { name: "George Miller",   gain: 9.53  },
    { name: "Hannah Lee",      gain: 14.21 },
    { name: "Jane Lee",        gain: 16.01 },
    { name: "Bill Tray",       gain: 23.08 },
    { name: "Alex Fanning",    gain: 14.21 },
    { name: "Andrew Porter",   gain: 5.21  },
  ]);
}

export default db;
