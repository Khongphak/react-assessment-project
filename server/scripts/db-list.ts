import db from "../db.js";

const rows = db.prepare("SELECT * FROM registrations ORDER BY created_at DESC").all();

if (rows.length === 0) {
  console.log("No registrations found.");
} else {
  console.table(rows);
  console.log(`Total: ${rows.length} registration(s)`);
}
